import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";


import AppIntro from "../screen/AppIntro";
import Constants from "../misc/Constants";
import Colour from "../assets/Colour";
import LanguageSelector from "../screen/LanguageSelector";
import Login from "../screen/Login";



const NativeStack = createNativeStackNavigator();

const AutiNavigator = () => (
    <NativeStack.Navigator 
    screenOptions={{ headerShown:false,
        statusbar:{
            visible:true,
            backgroundColor: Colour.primaryColor
        }
        }}>

            <NativeStack.Screen
            component={LanguageSelector}   
            name={Constants.LANGUAGE_SELECTION_SCREEN} />

            
        <NativeStack.Screen
        component={AppIntro}   
        name={Constants.APP_INTRO} />


        <NativeStack.Screen
        component={Login}   
        name={Constants.LOGIN_SELECTION} />





            
    </NativeStack.Navigator>
)

export default AutiNavigator;



