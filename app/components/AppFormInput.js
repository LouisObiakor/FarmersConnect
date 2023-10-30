import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFormikContext } from 'formik';


import Colour from '../assets/Colour';
import styleApp from '../styles/Stylesheet1';
import TextInputer from './TextInputer';
import { usePasswordToggler } from '../hooks/usePasswordToggler';



function AppFormInput({name, icon, fontType, inputType, ...AllProps}) {
const { handleChange, setFieldTouched, touched, errors} = useFormikContext();
const fontIdentifier = () => {
    if(fontType === "Entypo") return <Entypo size={25} name={icon} color={Colour.gray_40} style={{alignSelf:'center'}} />;
    else if(fontType === "FontAwesome") return <FontAwesome size={25} name={icon} color={Colour.gray_40} style={{alignSelf:'center'}} />
    else if(fontType === "MaterialIcons") return <MaterialIcons size={25} name={icon} color={Colour.gray_40} style={{alignSelf:'center'}} />
}
const { handlePasswordVisibility, rightIcon, passwordVisibility} = usePasswordToggler();

    return (

        <>
        <View>

        <View style={styleApp.formFieldView}>
            {fontIdentifier()}
            <TextInputer
            {...AllProps} 
           onChangeText={handleChange(name)}
           onBlur={() =>setFieldTouched(name)}  
           secureTextEntry ={passwordVisibility}
           />
           {inputType && <Pressable onPress={handlePasswordVisibility} style={{alignSelf:'center'}}> 
            <MaterialCommunityIcons name={rightIcon} size={25} color={Colour.gray_40} />
            </Pressable>
            }
        </View>

            <Text style={styleApp.formErr}>{touched[name] && errors[name]}</Text>
           </View>
        

            </>

    );
    
}

export default AppFormInput;