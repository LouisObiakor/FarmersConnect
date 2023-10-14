import React, { useContext } from 'react';
import * as Yup from "yup";
import { Text, View, ScrollView } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


import AppForm from '../components/AppForm';
import AppFormInput from '../components/AppFormInput';
import AppStatusBar from '../components/AppStatusBar';
import AuthContext from '../auth/Context';
import Colour from '../assets/Colour';
import styleApp from '../styles/Stylesheet1';
import SubButton from '../components/SubButton';
import TranslateLanguage from '../utility/LanguageTranslator';
import useFormApi from '../hooks/useFormApi';
import AppLoading from '../components/AppLoading';
import AppAlert from '../components/AppAlert';
import ClientConnect from '../api/ClientConnect';



const valSchema = Yup.object().shape({
    user: Yup.string().required().min(4).label("User"),
    password: Yup.string().required().min(4).label("Password")
})



function Login(props) {

    const { languageSelected } = useContext(AuthContext);
    const translator = TranslateLanguage(languageSelected);
    const formApi = useFormApi(ClientConnect.authUser);
    const disableNotificationAlert = () =>{
        formApi.setNotificationAlert(false);
    }   



    const handleLogFormSubmit = async (values) => {
        formApi.setLoading(true);
        if(!formApi.checkNetwork){
            formApi.setLoading(false);
            formApi.setNotificationText(translator.networkError)
            formApi.setNotificationAlert(true)
            return;
        } 
        const response = await ClientConnect.authUser(values);
        if(response.ok){
            formApi.setLoading(false);
            formApi.setNotificationText(formApi.responseData.problem)
            formApi.setNotificationTextColor(Colour.red)
            formApi.setNotificationAlert(true)
            return;
        }
     
        formApi.setLoading(false);
        formApi.setNotificationText("server is working with "+ response.data)
            formApi.setNotificationTextColor(Colour.red)
            formApi.setNotificationAlert(true)
        


}


    return (
        <ScrollView style={styleApp.formContainer}>

            <AppLoading visiblility={formApi.loading} />
            <AppAlert  
            visibility={formApi.notificationAlert} 
            notification={formApi.notificationText} 
            onPress={disableNotificationAlert}
            notificationColor={formApi.notificationTextColor}
            />

        <View style={styleApp.formView}>
            <AppStatusBar />

            <View style={styleApp.formImageContainer}>
            <MaterialCommunityIcons name='grain' size={40} color={Colour.white} />
            <Text style={styleApp.formText}>{translator.login}</Text>
            </View>

            <View style={styleApp.formWrapper}>

            <AppForm
        initialValues={{ user: "", password: ""}}
        validationSchema={valSchema}
        onSubmit={(values) => {handleLogFormSubmit(values)}}>

              <AppFormInput 
                        name="user"
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon="user"
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        placeholder={translator.user}
                        />

                <AppFormInput 
                        name="password"
                        autoCorrect={false}
                        autoCapitalize='none'
                        icon="lock"
                        keyboardType='numeric'
                        textContentType='password'
                        placeholder={translator.password}
                        secureTextEntry
                        />

                <Text style={styleApp.forgotPass}>{translator.forgotPassword}</Text>  

                <SubButton title={translator.login} /> 
               <View style={styleApp.noAcct}>
               <Text> {translator.noAccount} </Text>  
               <Text style={styleApp.regText}> {translator.register} </Text>  
               </View>
            
        </AppForm>
            </View>
            
            <View style={styleApp.regNavView}>
                <Entypo name='chevron-with-circle-right' size={25} color={Colour.white} />
            </View>
        </View>
        </ScrollView>
    );
}

export default Login;