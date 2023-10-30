import { View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import Colour from '../assets/Colour';

export default function AppLoading({visiblility}) {
    if(!visiblility) return null;

  return (
    <View style={style.container}>
      <ActivityIndicator style={style.loadingImg} size={60}/>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        position: 'absolute',
        width: "100%",
        height: "100%",
        zIndex: 99,
        opacity: 0.8,
        backgroundColor: Colour.white,
        alignItems:'center',
        justifyContent: 'center'
    },
    loadingImg:{
        zIndex: 999,
        width: 150,
        height: 150,
    }
})

