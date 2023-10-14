import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colour from '../assets/Colour'

export default function AppAlert({onPress, notification, visibility, notificationColor}) {
  if(!visibility) return null;

  return (
    <View style={style.container}>
      <View style={style.dailogContainer}>
       <Text style={[style.alertNotification,{color: notificationColor}]}>{notification}</Text>
       <TouchableOpacity style={style.alertButton} onPress={onPress}>
        <Text style={style.alertButText}>OK</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colour.white,
},
  dailogContainer:{
        width: "70%",
        padding:20,
        zIndex:99999,
        backgroundColor: Colour.primaryColor,
  },
  alertButton:{
    width : 80,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colour.white,
    alignSelf: 'flex-end',
    marginTop:20,
  },
  alertButText:{
    color: Colour.primaryColor,
    fontFamily: 'monospace'
  },
  alertNotification:{
    fontFamily: 'monospace',
    textAlign: 'center'
  }
})