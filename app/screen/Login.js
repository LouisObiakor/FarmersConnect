import React, { useContext, useState } from 'react';
import * as Yup from "yup";
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import jwtDecode from 'jwt-decode';


import AppAlert from '../components/AppAlert';
import AppForm from '../components/AppForm';
import AppFormInput from '../components/AppFormInput';
import AppLoading from '../components/AppLoading';
import AppStatusBar from '../components/AppStatusBar';
import AuthContext from '../auth/Context';
import ClientConnect from '../api/ClientConnect';
import Colour from '../assets/Colour';
import Constants from "../misc/Constants";
import styleApp from '../styles/Stylesheet1';
import SubButton from '../components/SubButton';
import TranslateLanguage from '../utility/LanguageTranslator';
import useFormApi from '../hooks/useFormApi';
import Storage from '../auth/Storage';



const valSchema = Yup.object().shape({
    email: Yup.string().required().min(4).label("User"),
    password: Yup.string().required().min(4).label("Password")
})



function Login({navigation}) {

    const { languageSelected, setUser } = useContext(AuthContext);
    const translator = TranslateLanguage(languageSelected);
    const navigateToRegister = () => {
        navigation.navigate(Constants.REGISTER_SELECTION);
    }
    const formApi = useFormApi();
    const disableNotificationAlert = () =>{
        formApi.setNotifier("", "", false,false);
    }   
    const handleLogFormSubmit = async (values) => {
        formApi.setNotifier("", "", false,true);
        if(!formApi.checkNetwork){
            formApi.setNotifier(translator.networkError, Colour.red, true, false);
            return;
        } 
        const response = await ClientConnect.authUser(values);
        if(!response.ok){
            formApi.setNotifier(response.problem, Colour.red, true, false);
            return;
        }
        if(response.data.error){
            formApi.setNotifier(translator.serverErrorForm, Colour.red, true, false);
            return;
        }
        if(response.data.invalid){
            formApi.setNotifier(translator.invalidLogin, Colour.red, true, false);
            return;
        }
        if(response.data.userUnconfirmed){
            const unconfirmed = translator.dear+" "+response.data.firstName+", "+translator.kindlyLogin+" "+response.data.email;
            formApi.setNotifier(unconfirmed, Colour.primaryColor, true, false);
            return;
        }
        const result = jwtDecode(response.data);
        Storage.storeItem(Constants.USER_KEY_STORE, result);
        setUser(result.email);
        formApi.setNotifier("", "", false,false);

}


    return (
        <>
            <AppLoading visiblility={formApi.loading} />
            <AppAlert  
            visibility={formApi.notificationAlert} 
            notification={formApi.notificationText} 
            onPress={disableNotificationAlert}
            notificationColor={formApi.notificationTextColor}
            />

        <ScrollView style={styleApp.formContainer}>


        <View style={styleApp.formView}>
            <AppStatusBar />

            <View style={styleApp.formImageContainer}>
            <MaterialCommunityIcons name='grain' size={40} color={Colour.white} />
            <Text style={styleApp.formText}>{translator.login}</Text>
            </View>

            <View style={styleApp.formWrapper}>

            <AppForm
        initialValues={{ email: "", password: ""}}
        validationSchema={valSchema}
        onSubmit={(values) => {handleLogFormSubmit(values)}}>

              <AppFormInput 
                        name="email"
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon="user"
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        placeholder={translator.user}
                        fontType="Entypo"
                        />

                <AppFormInput 
                        name="password"
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon="lock"
                        textContentType='password'
                        placeholder={translator.password}
                        fontType="Entypo"
                        inputType
                        />

                
                <Text style={styleApp.forgotPass}>{translator.forgotPassword}</Text>  

                <SubButton title={translator.login} /> 
               <View style={styleApp.noAcct}>
               <Text> {translator.noAccount} </Text>  
               <Text onPress={navigateToRegister} style={styleApp.regText}> {translator.register} </Text>  
               </View>
            
        </AppForm>
            </View>
            
            <TouchableOpacity onPress={navigateToRegister}  style={styleApp.regNavView}>
                <Entypo name='chevron-with-circle-right' size={25} color={Colour.white} />
            </TouchableOpacity>


        </View>
        </ScrollView>
        </>
    );
}

export default Login;