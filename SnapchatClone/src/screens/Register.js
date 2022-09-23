import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../config";
import { useNavigation } from "@react-navigation/native";
import Ionicons from  '@expo/vector-icons/Ionicons';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { navigate } = useNavigation();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //Register user to firebase auth.
  const handleRegister = () => {
    setIsError(false);
    setErrorMessage("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        navigate("Login");
      })
      //Catch possible errors.
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setIsError(true);
            setErrorMessage("Email already in use !");
            break;
          case "auth/invalid-email":
            setIsError(true);
            setErrorMessage("Invalid email");
            break;
          case "auth/weak-password":
            setIsError(true);
            setErrorMessage("Password should be at least 6 characters");
            break;
        }
      })
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
        <TextInput
          style={styles.textInput}
          placeholder="Password Again"
          value={rePassword}
          onChangeText={(value) => setRePassword(value)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={() => handleRegister()} style={styles.registerButton}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      {isError ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : (
          <Text style={styles.errorText}> </Text>
      )}
      <Text style={styles.labelStyle}>Already have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          navigate("Login")
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Login   </Text>
        <Ionicons  style={styles.iconStyle} name="ios-logo-snapchat" size={24}/>
      </TouchableOpacity>
    </View>
  );
};

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
    marginBottom: -1
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
  registerButton: {
    marginTop: 50,
    height: 80,
    width: 170,
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
  registerText: {
    fontWeight: "bold",
    fontSize: 34,
    color: "#000000",
  },
  labelStyle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000000",
    marginTop: 40,
  },
  loginButton: {
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
  loginText: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
  },
});


export default Register;