import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ProfileStack from './ProfileStack';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import PhotoStack from '../navigation/PhotoStack'
import MapStack from '../navigation/MapStack';


const BottomNav = createBottomTabNavigator();

const BottomTabNav = () => {

  const {theme} = useSelector((state) => state.theme);


  return (
    <BottomNav.Navigator
      initialRouteName='Photo'
      screenOptions={{
        // Config of the Bottom Tab Navigation
        tabBarStyle: [{height: 90, borderTopWidth: 1.5}, {borderTopColor: theme.tabBarOnlineColor}, {backgroundColor: theme.tabBarBgColor}], 
       
      }}>
      <BottomNav.Screen
        name="Photo"
        component={PhotoStack}
        options={{
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          headerShown: true,
          headerTitle: 'Photo',
          headerBackVisible: false,
          headerStyle: {backgroundColor: theme.headerBgColor, shadowColor: theme.tabBarOnlineColor},
          headerTitleStyle: {color: theme.textColor, fontSize:  20},
          headerTitleAlign: 'center',
          //Tab Bar configurations.
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name={
                  tabInfo.focused
                    ? 'camera'
                    : 'camera-outline'
                }
                size={30}
                color={tabInfo.focused ? theme.tabBarOnlineColor : theme.tabBarOfflineColor }
              />
            );
          },
          tabBarActiveTintColor: theme.tabBarOnlineColor,
        }}
      />
      <BottomNav.Screen
        name="Map"
        component={MapStack}
        options={{
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          headerShown: true,
          headerTitle: 'Map',
          headerBackVisible: false,
          headerStyle: {backgroundColor: theme.headerBgColor, shadowColor: theme.tabBarOnlineColor},
          headerTitleStyle: {color: theme.textColor, fontSize:  20},
          headerTitleAlign: 'center',
          
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name={
                  tabInfo.focused
                    ? 'ios-map'
                    : 'ios-map-outline'
                }
                size={30}
                color={tabInfo.focused ? theme.tabBarOnlineColor : theme.tabBarOfflineColor }
              />
            );
          },
          tabBarActiveTintColor: theme.tabBarOnlineColor,
        }}
      />
      <BottomNav.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          headerTitle: 'Profile',
          headerBackVisible: false,
          headerStyle: {backgroundColor: theme.headerBgColor},
          headerTitleStyle: {color: theme.textColor},
          headerTitleAlign: 'center',
          
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name={
                  tabInfo.focused
                    ? 'ios-person-circle'
                    : 'ios-person-circle-outline'
                }
                size={30}
                color={tabInfo.focused ? theme.tabBarOnlineColor : theme.tabBarOfflineColor }
              />
            );
          },
          tabBarActiveTintColor: theme.tabBarOnlineColor,
        }}
      />
    </BottomNav.Navigator>
  )
}

export default BottomTabNav;