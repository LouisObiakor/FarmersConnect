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
    alignItems: 'center',
    justifyContent: 'center',
},
  dailogContainer:{
        width: 280,
        padding:15,
        borderRadius: 5,
        zIndex:99999,
        backgroundColor: Colour.white,
        //android shadow
        elevation: 20,
        //for ios shadow
        shadowColor: '#52006A',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
  },
  alertButton:{
    width : 80,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colour.primaryColor,
    alignSelf: 'flex-end',
    marginTop:20,
  },
  alertButText:{
    color: Colour.white,
    fontFamily: 'monospace'
  },
  alertNotification:{
    fontFamily: 'monospace',
    textAlign: 'center'
  }
})