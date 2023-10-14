import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigator/AppNavigator';
import AuthContext from './app/auth/Context';
import AuthStorage from './app/auth/Storage';
import AutiNavigator from './app/navigator/AutiNavigate';
import Constants from './app/misc/Constants';
import NavigatorTheme from './app/navigator/NavigatorTheme';




export default function App() {

  const [languageSelected, setLanguageSelected] = useState();
  const [user, setUser] = useState();
  const getUser = async () =>{
    const user = await AuthStorage.getItem(Constants.USER_KEY_STORE);
    setUser(user);
  }
  const getLanguage = async () =>{
    const userLanguage = await AuthStorage.getItem(Constants.LANGUAGE_KEY_STORE);
    setLanguageSelected(userLanguage);
  }
  useEffect(()=>{
    getUser();
    getLanguage();
    
  }, []);


  

  return (

    <AuthContext.Provider value={{user, setUser, languageSelected, setLanguageSelected}}>
      <NavigationContainer theme={NavigatorTheme}>

       {user? <AppNavigator /> : <AutiNavigator /> }
        
      </NavigationContainer>
      
    </AuthContext.Provider>
    
  );
}


