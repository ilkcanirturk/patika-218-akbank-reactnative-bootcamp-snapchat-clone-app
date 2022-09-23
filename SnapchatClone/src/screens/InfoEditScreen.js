import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword, updateEmail } from "@firebase/auth";
import { auth } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logIn } from "../redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ProfileSettings = () => {
  const user = useSelector((state) => state.auth.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");

  //  Current user email info.
  useEffect(() => {
    setEmail(user?.email);
  }, []);

  // Update User Email
  const handleUpdate = async () => {
    await updateEmail(auth.currentUser, email).then((response) => {});
    await signInWithEmailAndPassword(auth, email, user?.password).then(
      (response) => {
        storeData({
          email: response.user.email,
          password: user?.password,
        });
        // Get data from Async Storage
        getData();
        goBack();
      }
    );
  };
  // Save user data to Async Storage
  const storeData = async (data) => {
    await AsyncStorage.setItem("user", JSON.stringify(data));
  };

  // Save data to Global State.
  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem("user");
    if (jsonValue != null) {
      dispatch(logIn(JSON.parse(jsonValue)));
    }
  };
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <TouchableOpacity
        onPress={() => {
          navigate("ProfileScreen");
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: "#FFFC00",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 27,
          marginTop: 5,
        }}
      >
        <Ionicons name="ios-chevron-back" size={45} />
      </TouchableOpacity>
      <Text style={[styles.titleStyle, { color: theme.textColor }]}>
        E-mail
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          marginTop: -180,
        }}
      >
        <TextInput
          style={[styles.textInput, { color: theme.textInfoColor }]}
          label="email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TouchableOpacity
          style={styles.updateButton}
          onPress={() => handleUpdate()}
        >
          <Text style={styles.updateText}>Update</Text>
          <Ionicons
            style={styles.iconStyle}
            name="ios-logo-snapchat"
            size={24}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: "700",
    alignSelf: "center",
    paddingTop: 160,
  },
  textInput: {
    width: 275,
    height: 45,
    fontSize: 20,
    borderTopColor: "#000000",
    borderTopWidth: 1,

    textAlign: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.44,
    shadowRadius: 3,
    elevation: 5,
  },
  updateButton: {
    marginTop: 95,
    height: 50,
    width: 120,
    flexDirection: "row",
    backgroundColor: "#FFFC00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.41,
    shadowRadius: 5,
    elevation: 6,
  },
  updateText: {
    paddingHorizontal: 5,
    fontSize: 24,
    fontWeight: "600",
  },
  iconStyle: {
    position: "relative",
  },
});

export default ProfileSettings;
