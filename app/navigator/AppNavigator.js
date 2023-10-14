import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Constants from "../misc/Constants";
import Colour from "../assets/Colour";
import Login from "../screen/Login";


//tabBarHideOnKeyboard: true
const NativeStack = createNativeStackNavigator();

const AppNavigator = () => (
    <NativeStack.Navigator 
    screenOptions={{ headerShown:false,
        statusbar:{
            visible:true,
            backgroundColor: Colour.primaryColor
        }
        }}>

            <NativeStack.Screen
            component={Login}   
            name={Constants.LANGUAGE_SELECTION_SCREEN} />


    </NativeStack.Navigator>
)

export default AppNavigator;



