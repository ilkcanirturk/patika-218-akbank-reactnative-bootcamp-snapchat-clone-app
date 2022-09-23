import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react';
import { auth } from "../../config";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from  '@expo/vector-icons/Ionicons';


const ProfileScreen = () => {

  const { navigate } = useNavigation();
  const user = useSelector((state) => state.auth.user);
  const {theme} = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  //Deletes current user from Async storage when logout.
  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    dispatch(logOut());
    auth.signOut();
  };


  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Image style={styles.imageStyle} source={require('../../assets/geralt.jpg')}/>
      <Text style={[styles.textName, {color: theme.textColor}]}>İlkcan</Text>
      <View style= {styles.containerInfo}>
        <Text style= {[styles.textInfo, {color: theme.textColor}]}>
            {user? (user.email) : ('') }
        </Text>
      </View>
      <View style={styles.editContainer}>
      {/* Navigates when press */}
        <Pressable onPress={() => navigate('InfoEditScreen')} style={styles.editButtonStyle}>
          <Text style={styles.editTextStyle}>Edit</Text>
          <Ionicons name="settings-outline" size= {30} style={styles.iconStyle}/>
        </Pressable>
        <Pressable onPress={() => navigate('ThemeEditScreen')} style={styles.themeButtonStyle}>
          <Text style={styles.themeTextStyle}>Theme</Text>
          <Ionicons name="color-palette-outline" size= {30} style={styles.iconStyle}/>
        </Pressable>
      </View>
      <Pressable onPress={handleLogout} style={styles.logoutButtonStyle}>
        <Text style={styles.logoutTextStyle}>Logout</Text>
        <Ionicons name="exit-outline" size= {30} style={styles.iconStyle}/>
      </Pressable>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 70
    },
    imageStyle: {
        backgroundColor: 'gray', 
        height: 120, 
        width: 120, 
        borderRadius: 75, 
        marginVertical: 20, 
        alignSelf: 'center'
    },
    textName: {
        fontSize: 26, 
        fontWeight: 'bold',  
        alignSelf: 'center'
    },
    containerInfo: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginHorizontal: 55,
        marginTop: 5
    },
    textInfo: {
        fontSize: 16, 
    },
    editButtonStyle:{
        width: 110, 
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff59d', 
        justifyContent: 'center', 
        alignSelf: 'center', 
        marginTop: 25,
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: 20
    },
    editTextStyle: {
        justifyContent: 'center', 
        alignSelf: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
        paddingRight: 10,
        paddingLeft: 5
    },
    themeButtonStyle:{
        width: 110, 
        height: 50, 
        backgroundColor: '#fff59d',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignSelf: 'center', 
        marginTop: 25,
        borderTopColor: 'red',
        borderBottomColor: '#2196f3',
        borderLeftColor: 'green',
        borderRightColor: 'magenta',
        borderWidth: 1.5,
        borderRadius: 20
    },
    themeTextStyle: {
        justifyContent: 'center', 
        alignSelf: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
        paddingLeft: 5
    },
    logoutButtonStyle: {
      width: 120, 
      height: 50,
      flexDirection: 'row',
      backgroundColor: '#FFFC00', 
      justifyContent: 'center', 
      alignSelf: 'center', 
      marginTop: 260,
      borderColor: 'black',
      borderWidth: 1.5,
      borderRadius: 20
    },
    logoutTextStyle: {
      justifyContent: 'center', 
      alignSelf: 'center',
      color: 'black',
      fontSize:  20,
      fontWeight: '600',
      paddingLeft: 5
    },
    iconStyle: {
      paddingTop: 7,
      paddingLeft: 8
    },
    editContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
    }
})