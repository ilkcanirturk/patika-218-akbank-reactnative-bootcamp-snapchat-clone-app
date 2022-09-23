import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

import darkTheme from "../constants/dark";
import lightTheme from "../constants/light";


//Theme Mode 
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: lightTheme,
  },
  reducers: {
    handleLightTheme: state => {
      return {
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };
    },
    handleDarkTheme: state => {
      return {
        theme: state.theme === darkTheme ? lightTheme : darkTheme,
      };
    },
  },
});

// User Authentication
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = null;
    },
  },
});


export const { handleLightTheme, handleDarkTheme} = themeSlice.actions;
export const { logIn, logOut } = authSlice.actions;

//combine reducers
export const store = configureStore({
  reducer: combineReducers({
    theme: themeSlice.reducer,
    auth: authSlice.reducer
  }),
});