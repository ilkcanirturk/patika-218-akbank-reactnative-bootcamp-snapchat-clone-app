import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import MapScreen from '../screens/MapScreen';
import PhotoDetail from '../screens/PhotoDetail';


const MapStackNav = createStackNavigator();

const MapStack = () => {
    //MapStack component for Stack Screens which associated with map page.
    const {theme} = useSelector((state) => state.theme);

  return (
    <MapStackNav.Navigator 
        initialRouteName='MapScreen'
    >
        <MapStackNav.Screen
            name= 'MapScreen'
            component= { MapScreen }
            options= {{
                headerShown: false
            }}
        />
        <MapStackNav.Screen
            name= 'PhotoDetail'
            component= { PhotoDetail }
            options= {{
                headerShown: false,
                headerStyle: {
                    backgroundColor: theme.headerColor
                }
            }}
        />
    </MapStackNav.Navigator>
  )
}

export default MapStack