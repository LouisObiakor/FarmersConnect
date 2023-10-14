import React from 'react';
import { StyleSheet, Text, TouchableOpacity,  } from 'react-native';







function AppBut({onPress, title, textColor, butColor}) {
    

    return (
        <TouchableOpacity onPress={onPress}  style={[style.touch,{backgroundColor:butColor}]}>
            <Text style={[{color:textColor, fontFamily:'monospace'}]}>{title}</Text>
        </TouchableOpacity>
    );
}

export default AppBut;


const style = StyleSheet.create({
    touch: {
        width : 170,
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        
    }
})