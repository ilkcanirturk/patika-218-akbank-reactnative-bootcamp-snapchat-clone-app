import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleLightTheme, handleDarkTheme } from "../redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";


//For theme mode change.
const ThemeEditScreen = () => {
  const { navigate } = useNavigation();
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const onPress = () => {
    navigate("ProfileScreen");
  };

  const setLightTheme = () => {
    dispatch(handleLightTheme());
  };

  const setDarkTheme = () => {
    dispatch(handleDarkTheme());
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <Ionicons name="ios-chevron-back" size={48} />
      </TouchableOpacity>
      <View style={styles.config}>
        <TouchableOpacity style={styles.buttonLight} onPress={setLightTheme}>
          <Text style={styles.textLight}>Light</Text>
          <Ionicons name="ios-sunny" size={45} style={styles.iconLight} />
        </TouchableOpacity>
        <Octicons name="arrow-switch" size={70} style= {styles.switchIcon} />
        <TouchableOpacity style={styles.buttonDark} onPress={setDarkTheme}>
          <Text style={styles.textDark}>Dark</Text>
          <Ionicons name="ios-moon" size={45} style={styles.iconDark} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex:  1
  },
  config: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 270,
    alignItems: "center",
  },
  buttonLight: {
    display: "flex",
    height: 80,
    width: 120,
    backgroundColor: "white",
    borderRadius: 25,
    borderColor: "#ffecb3",
    borderWidth: 2,
    marginLeft: 20,
    flexDirection: "row",
  },
  textLight: {
    display: "flex",
    alignSelf: "center",
    marginTop: 13,
    color: "black",
    fontSize: 28,
    paddingLeft: 20,
  },
  iconLight: {
    color: "orange",
  },
  buttonDark: {
    display: "flex",
    height: 80,
    width: 120,
    marginRight: 20,
    backgroundColor: "#616161",
    borderRadius: 25,
    borderColor: "#ffecb3",
    borderWidth: 2,
    flexDirection: "row",
  },
  textDark: {
    display: "flex",
    alignSelf: "center",
    marginTop: 13,
    color: "white",
    fontSize: 28,
    paddingLeft: 20,
  },
  backButton: {
    marginLeft: 30,
    marginTop: 50,
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: "#FFFC00",
    borderRadius: 25,
    margin: 18,
    borderTopColor: "red",
    borderBottomColor: "#2196f3",
    borderLeftColor: "green",
    borderRightColor: "magenta",
    borderWidth: 1.5,
  },
  switchIcon: {
    color: "#fff59d"
  }
});

export default ThemeEditScreen;
