import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


import AppStatusBar from '../components/AppStatusBar';
import AuthContext from '../auth/Context';
import AuthStorage from '../auth/Storage';
import Constants from '../misc/Constants';
import styleApp from '../styles/Stylesheet1';


function LanguageSelector({ navigation }) {

    const {setLanguageSelected} = useContext(AuthContext);
    const languageSelect = (language) =>{
          setLanguageSelected(language);
            AuthStorage.storeItem(Constants.LANGUAGE_KEY_STORE,language)
            navigation.navigate(Constants.APP_INTRO);
    }




    return (
        <>
            <AppStatusBar /> 
        <View style={styleApp.containerWrapper}>

            <View>
                <TouchableOpacity onPress={() => languageSelect("EN")} style={styleApp.touchOpa}>
                    <View style={styleApp.flagView}>
                    <Image source={require("../assets/english.png")} style={styleApp.flagImage} />
                    <Text style={styleApp.flagText}>ENGLISH</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => languageSelect("FR")}  style={styleApp.touchOpa}>
                    <View style={styleApp.flagView}>
                    <Image source={require("../assets/french.png")} style={styleApp.flagImage} />
                    <Text style={styleApp.flagText}>FRENCH</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
        </>
    );
}

export default LanguageSelector;