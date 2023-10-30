import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'


export default function Form() {
  return (
    <View style={{marginTop: 40}}>
        
      <Text>Form</Text>
      <TextInput 
      style={style.input}
      secureTextEntry
      placeholder='Here'
      />
    </View>
  )
}

const style = StyleSheet.create({
    input:{
        width:"90%",
        height: 40,
        borderWidth: 1,
        borderColor: "#000"
    }
})