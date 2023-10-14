import React, { useContext } from 'react';
import {  View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';



import AppStatusBar from '../components/AppStatusBar';
import AuthContext from '../auth/Context';
import Constants from '../misc/Constants';
import SlidesAppIntro from '../utility/SlidesAppIntro';
import styleApp from '../styles/Stylesheet1';


 





function AppIntro ({navigation}) {
  const { languageSelected } = useContext(AuthContext);
  const slideIntro = SlidesAppIntro(languageSelected);
 


  const renderItem = ({ item }) => {
    return (
      <View style={styleApp.introSlide}>
        <Image source={item.image} style={styleApp.introImg}/>
        <Text style={styleApp.introText}>{item.text}</Text>
      </View>
    );
  }
  


  const AppIntroDone= () =>{
    navigation.replace(Constants.LOGIN_SELECTION);
  }
  
  
    return(
      <>
      <AppStatusBar />
       <AppIntroSlider 
       bottomButton 
       showSkipButton 
       renderItem={renderItem} data={slideIntro} onDone={AppIntroDone} />
       </>
    );
  
}

export default AppIntro;

