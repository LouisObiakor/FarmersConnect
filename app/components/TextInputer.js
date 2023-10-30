import React from 'react';
import { StyleSheet, TextInput } from 'react-native';


function TextInputer({onChangeText, onBlur, ...AllProps}) {

    return (
        
        <TextInput
        style={style.textInput}
        {...AllProps}
        onChangeText={onChangeText}
        onBlur={onBlur}
        />
    );
}

export default TextInputer;

const style = StyleSheet.create({
    textInput: {
        width: "85%",
        height: "100%",
        marginLeft:8,
    }
})