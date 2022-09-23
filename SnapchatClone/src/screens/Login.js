import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/store";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../config";
import Ionicons from  '@expo/vector-icons/Ionicons';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setIsError(false);
    setErrorMessage("");
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        storeData({
          email: response.user.email,
          password: password,
        });
        // Get user from AsyncStorage for save to Global State.
        getData();
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            setIsError(true);
            setErrorMessage("User not found!");
            break;
          case "auth/invalid-email":
            setIsError(true);
            setErrorMessage("Invalid email");
            break;
          case "auth/wrong-password":
            setIsError(true);
            setErrorMessage("Wrong Password");
            break;
        }
      });
  };

  const storeData = async (data) => {
    // Save user AsyncStorage
    await AsyncStorage.setItem("user", JSON.stringify(data));
  };

  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem("user");
    if (jsonValue != null) {
      // Incoming data is saved to Global State
      dispatch(logIn(JSON.parse(jsonValue)));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/snapchat.png")}
        style={styles.logoStyle}
      />
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => handleLogin()}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      {isError ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : (
        <Text style={styles.errorText}> </Text>
      )}
      <Text style={styles.labelStyle}>Don't have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          navigate("Register");
        }}
        style={styles.registerButton}
      >
        <Text style={styles.registerText}>Register   </Text>
        <Ionicons  style={styles.iconStyle} name="ios-logo-snapchat" size={24}/>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#fff59d"
  },
  logoStyle: {
    maxHeight: 150,
    maxWidth:  370,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 70,
    marginBottom: -1,
  },
  containerTextInput: {
    marginTop: 40,
    alignItems: "center",
  },
  textInput: {
    paddingHorizontal: 10,
    width: 275,
    height: 50,
    fontSize: 20,
    borderTopColor: "#000000",
    borderTopWidth: 1,
    marginBottom: 10,
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
  loginButton: {
    marginTop: 50,
    height: 80,
    width: 140,
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
  loginText: {
    fontWeight: "bold",
    fontSize: 34,
    color: "#000000",
  },
  labelStyle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000000",
    marginTop: 110,
  },
  registerButton: {
    marginTop: 10,
    height: 40,
    width: 120,
    flexDirection: "row",
    backgroundColor: "#191414",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.21,
    shadowRadius: 5,
    elevation: 6,
  },
  iconStyle:{
    color: "#FFFC00"
  },
  registerText: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
  },
});
