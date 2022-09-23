import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PhotoScreen from '../screens/PhotoScreen';


const PhotoStackNav = createStackNavigator();

const PhotoStack = () => {
    //PhotoStack component for Stack Screens which associated with Photo page.
    

  return (
    <PhotoStackNav.Navigator 
        initialRouteName='PhotoScreen'
    >
        <PhotoStackNav.Screen
            name= 'PhotoScreen'
            component= { PhotoScreen }
            options= {{
                headerShown: false
            }}
        />
    </PhotoStackNav.Navigator>
  )
}

export default PhotoStack