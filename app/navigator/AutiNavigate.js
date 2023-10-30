import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";


import AppIntro from "../screen/AppIntro";
import Constants from "../misc/Constants";
import Colour from "../assets/Colour";
import LanguageSelector from "../screen/LanguageSelector";
import Login from "../screen/Login";
import Register from "../screen/Register";
import TestScreen from "../screen/TestScreen"



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


        <NativeStack.Screen
        component={Register}   
        name={Constants.REGISTER_SELECTION} />





<NativeStack.Screen
        component={TestScreen}   
        name="Test" />

            
    </NativeStack.Navigator>
)

export default AutiNavigator;



