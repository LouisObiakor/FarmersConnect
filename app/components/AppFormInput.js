import React from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useFormikContext } from 'formik';


import Colour from '../assets/Colour';
import styleApp from '../styles/Stylesheet1';
import TextInputer from './TextInputer';



function AppFormInput({name, icon,...AllProps}) {
const { handleChange, setFieldTouched, touched, errors} = useFormikContext();

    return (
        <>
        <View>

        <View style={styleApp.formFieldView}>
            <Entypo size={25} name={icon} color={Colour.gray_40} style={{alignSelf:'center'}}/>
            <TextInputer 
           onChangeText={handleChange(name)}
           onBlur={() =>setFieldTouched(name)}
           {...AllProps}  
           />
        </View>

            <Text style={styleApp.formErr}>{touched[name] && errors[name]}</Text>
           </View>
        

            </>

    );
}

export default AppFormInput;