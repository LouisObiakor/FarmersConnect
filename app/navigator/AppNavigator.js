import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Constants from "../misc/Constants";
import Colour from "../assets/Colour";
import Login from "../screen/Login";
import { Entypo, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import LanguageSelector from "../screen/LanguageSelector";


//tabBarHideOnKeyboard: true


const BottomTabNavigator = createBottomTabNavigator();
const AppNavigator = () => (
    <BottomTabNavigator.Navigator 
    tabBarOptions={{
        activeBackgroundColor : Colour.primaryColor,
        activeTintColor : Colour.white,
        inactiveBackgroundColor: Colour.grey,
        inactiveTintColor: Colour.black,
        
    }}>

            <BottomTabNavigator.Screen
            options={{
                tabBarIcon: ({size, color}) => <Entypo name="user" size={size} color={color} />
            }}
            component={HomeStack}   
            name={Constants.LANGUAGE_SELECTION_SCREEN} />

        <BottomTabNavigator.Screen
        options={{
            tabBarIcon: ({size, color}) => <Entypo name="user" size={size} color={color} />,
            headerShown: false,
        }}
            component={HomeStack}   
            name="Account" />



        <BottomTabNavigator.Screen
        options={{
            tabBarIcon: ({size, color}) => <Entypo name="user" size={size} color={color} />
        }}
            component={HomeStack}   
            name="Farmers" 
            />


        <BottomTabNavigator.Screen
        options={{
            tabBarIcon: ({size, color}) => <Entypo name="user" size={size} color={color} />
        }}
            component={HomeStack}   
            name="Action" 
            />


    </BottomTabNavigator.Navigator>
)

export default AppNavigator;







const NativeStack = createNativeStackNavigator();
const HomeStack = () => (
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


    </NativeStack.Navigator>
);



const FarmStack = () => (
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
);





const AccountStack = () => (
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
);



