import React from "react";
import { store } from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import MainStackNav from "./src/navigation/MainStackNav";
import { NavigationContainer } from "@react-navigation/native";

export  default function App() {
  return (
    //Used Provider for App
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNav />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}


