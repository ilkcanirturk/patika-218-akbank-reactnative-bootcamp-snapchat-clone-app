import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const PhotoDetail = () => {
    const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <Text onPress={() => navigate("MapScreen")}>PhotoDetail</Text>
    </SafeAreaView>
  )
}

export default PhotoDetail

const styles = StyleSheet.create({})