import { View, ScrollView, Text, TouchableOpacity, Linking } from 'react-native'
import React, { useContext, useState } from 'react'
import { FontAwesome5, Entypo } from '@expo/vector-icons'
import * as Yup from "yup";



import AppForm from '../components/AppForm'
import AppFormInput from '../components/AppFormInput'
import AppStatusBar from '../components/AppStatusBar'
import AuthContext from '../auth/Context'
import ClientConnect from '../api/ClientConnect';
import Colour from '../assets/Colour'
import Constants from '../misc/Constants';
import SubButton from '../components/SubButton';
import styleApp from '../styles/Stylesheet1'
import TranslateLanguage from '../utility/LanguageTranslator'
import useFormApi from '../hooks/useFormApi';
import AppLoading from '../components/AppLoading';
import AppAlert from '../components/AppAlert';



const valSchema = Yup.object().shape({
    firstName : Yup.string().required().label("First Name"),
    lastName : Yup.string().required().label("Last Name"),
    email : Yup.string().required().email().label("Email"),
    password : Yup.string().required().min(8).label("Password"),
    confirmPassword : Yup.string().required('Please confirm your password.')
    .oneOf([Yup.ref('password')], 'Your passwords do not match.')
})




export default function Register({navigation}) {

    const {languageSelected} = useContext(AuthContext);
    const translator = TranslateLanguage(languageSelected);
    const [openEmail, setOpenEmail] = useState(false);
    const navigateToLogin = () => {
        navigation.navigate(Constants.LOGIN_SELECTION);
    }
    const formApi = useFormApi();
    const hideNotification = () =>{
       // if(openEmail) Linking.openURL('mailto:support@example.com');
        formApi.setNotifier("", "", false);
        setOpenEmail(false)
    }
    const submitRegistration = async (values) => {
        formApi.setNotifier("", "", false,true);
        if(!formApi.checkNetwork) {
            formApi.setNotifier(translator.networkError, Colour.red, true, false);
            return;
        }
        const response = await ClientConnect.registerUser(values);
        if(!response.ok) {
            formApi.setNotifier(response.problem, Colour.red, true, false);
            return;
        }
        if(response.data.error){
            formApi.setNotifier(translator.serverErrorForm, Colour.red, true, false);
            return;
        }
        if(response.data.emailExist){
            formApi.setNotifier(translator.emailExists, Colour.red, true, false);
            return;
        }
        //setOpenEmail(true);
        formApi.setNotifier(translator.successfulRegistration, Colour.primaryColor, true, false);
        
    }






  return (
    <>
  
        <AppLoading visiblility={formApi.loading} />
        <AppAlert onPress={hideNotification} notificationColor={formApi.notificationTextColor} notification={formApi.notificationText} visibility={formApi.notificationAlert} />
   

    <ScrollView style={styleApp.formContainer}>

         <View style={styleApp.formView}>
            <AppStatusBar />

            <View style={styleApp.formImageContainer}>
            <FontAwesome5 name='truck-moving' size={40} color={Colour.white} />
            <Text style={styleApp.formText}>{translator.register}</Text>
            </View>


            <View style={styleApp.formWrapper}>
            <AppForm
        initialValues={{ firstName: "", lastName: "",  email : "", password : "", confirmPassword: ""}}
        validationSchema={valSchema}
        onSubmit={(values) => {submitRegistration(values)}}>

              <AppFormInput 
                        name="firstName"
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon="user-circle-o"
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        placeholder={translator.firstName}
                        fontType="FontAwesome"
                        />

                    <AppFormInput 
                        name="lastName"
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon="user-circle-o"
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        placeholder={translator.lastName}
                        fontType="FontAwesome"
                        />      

                    <AppFormInput 
                        name="email"
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon="email"
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        placeholder={translator.email}
                        fontType="MaterialIcons"
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


                    <AppFormInput 
                        name="confirmPassword"
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon="lock"
                        textContentType='password'
                        placeholder={translator.confirmPassword}
                        fontType="Entypo"
                        inputType
                        />
  

                <SubButton title={translator.register} /> 

               <View style={styleApp.noAcct}>
               <Text> {translator.haveAccount} </Text>  
               <Text onPress={navigateToLogin} style={styleApp.regText}> {translator.login} </Text>  
               </View>
            
        </AppForm>
            </View>

            <TouchableOpacity onPress={navigateToLogin}  style={styleApp.regNavView}>
                <Entypo name='chevron-with-circle-right' size={25} color={Colour.white} />
            </TouchableOpacity>

    </View>
    </ScrollView>
    </>
  )
}