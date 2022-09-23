import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import ProfileScreen from '../screens/ProfileScreen';
import ThemeEditScreen from '../screens/ThemeEditScreen';
import InfoEditScreen from '../screens/InfoEditScreen';

const ProfileStackNav = createStackNavigator();

const ProfileStack = () => {
    //ProfileStack component for Stack Screens which associated with profile page.
    const {theme} = useSelector((state) => state.theme);

  return (
    <ProfileStackNav.Navigator 
        initialRouteName='ProfileScreen'
    >
        <ProfileStackNav.Screen
            name= 'ProfileScreen'
            component= { ProfileScreen }
            options= {{
                headerShown: false
            }}
        />
        <ProfileStackNav.Screen
            name= 'ThemeEditScreen'
            component= { ThemeEditScreen }
            options= {{
                headerShown: false,
                headerStyle: {
                    backgroundColor: theme.headerColor
                }
            }}
        />
        <ProfileStackNav.Screen
            name= 'InfoEditScreen'
            component= { InfoEditScreen }
            options= {{
                headerShown: false,
                headerStyle: {
                    backgroundColor: theme.headerColor
                }
            }}
        />
    </ProfileStackNav.Navigator>
  )
}

export default ProfileStack

