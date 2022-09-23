import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps';



//This part will be more functional in the future.


//Map Screen and user marker image.
const MapScreen = () => {
  return (
    <View>
      <MapView style={styles.mapStyle}>
        <Marker
            coordinate={{
                latitude: 36.997597,
                longitude: 35.334338
            }}
        >
            <Image source={require('../../assets/geralt.jpg')} style={styles.pp}/>
        </Marker>
      </MapView>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    mapStyle: {
        width: '100%',
        height: '100%'
    },
    pp: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
})