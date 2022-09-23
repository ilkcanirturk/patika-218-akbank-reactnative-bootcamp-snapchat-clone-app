import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { logIn } from "../redux/store";
import { auth } from "../../config";
import BottomTabNav from "./BottomTabNav";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../screens/Login";
import Register from "../screens/Register";



const Stack = createStackNavigator();

const MainStackNav = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  //Current data save for async storage.
  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem("user");
    if (jsonValue != null) {
      dispatch(logIn(JSON.parse(jsonValue)));
    }
  };

  //Login 
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, user?.email, user?.password).then(
      (response) => {
      }
    );
  };

  useEffect(() => {
    getData();
    if (user && user.email) {
      handleLogin();
    }
    //For auto login if already logged in.
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* User check for pages. */}
      {user ? (
        <>
          <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainStackNav;
