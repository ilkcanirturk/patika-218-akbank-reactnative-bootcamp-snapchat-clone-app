import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useSelector } from "react-redux";
import * as ImagePicker from 'expo-image-picker';

const PhotoScreen = () => {
  
  const {theme} = useSelector((state) => state.theme);
  const [image, setImage] = useState(null);
  
  // Data must be save to Firebase. ***

  //Pick image from phone library.
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3], 
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

   //Camera Button
  const openCamera = async () => {
    // Ask the user for the permission to access the camera.
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera! You can change it on settings.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
}

  return (
    <SafeAreaView style= {[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <TouchableOpacity style= {styles.buttonContainer} onPress={pickImage}>
        <Text style= {[styles.buttonText, {color: theme.textInfoColor}]}>Select        </Text>
        <FontAwesome name="picture-o" size= {34} style= {styles.iconStyle}/>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.buttonContainer} onPress={openCamera}>
        <Text style= {[styles.buttonText, {color: theme.textInfoColor}]}>Take Snap </Text>
        <FontAwesome name="camera" size= {34} style= {styles.iconStyle}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    width: 220,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginTop: 80,
    backgroundColor: '#FFFC00',
    borderRadius:  20,
    borderColor: '#000000',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '600'
  },
  iconStyle: {
    marginTop: 5
  }
})

export default PhotoScreen;