import { StyleSheet, Dimensions } from "react-native";
import  Constants  from 'expo-constants';
import Colour from "../assets/Colour";


const dimenWidth = Dimensions.get('screen').width;
const dimenHeight = Dimensions.get('screen').height;


const styleApp = StyleSheet.create({
    visibleBorder:{
        borderWidth:1,
        borderColor: "#000"
    },



    //LanguageSelector
    containerWrapper:{
        flex: 1,
        marginTop:Constants.statusBarHeight,
        justifyContent:"center",
        alignItems:"center"
    },
    flagImage:{
        width: 50,
        height:50,
        marginRight:30
    },
    flagImageTop:{
        width:180,
        height:40,
    },
    flagText:{
        fontSize:30,
        textAlign: "center"
    },
    flagView:{
        flexDirection:"row"
    },
    touchOpa:{
        marginTop: 50
    },



    //Login 
    formContainer:{
    },
    formView:{
        flex: 1,
        marginTop:Constants.statusBarHeight,
    },
    formImageContainer:{
        width: "100%",
        height: dimenHeight/2.8,
        backgroundColor: Colour.primaryColor,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom:40,
    },
    formText:{
        color: Colour.white,
        fontSize:25,
        fontWeight: "500",
        marginTop:10
    },
    formWrapper:{
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        height: 450,
        marginTop: -70,
        paddingTop: 20,
        backgroundColor: Colour.white,
        borderRadius: 20,
        //android shadow
        elevation: 20,
        //for ios shadow
        shadowColor: '#52006A',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },



    //AppIntro

    introSlide:{
        flex:1,
        marginTop:Constants.statusBarHeight,
        backgroundColor: Colour.approx_Lime_Green,
        alignItems: "center",
        justifyContent: "center"
      },
      introImg: {
        width: dimenWidth/2,
        height: dimenWidth/2,
        borderRadius: dimenWidth/4
      },
      introText: {
        marginTop: 15,
        color: Colour.white,
        padding:5,
        textAlign: "center",
        fontFamily: 'monospace'
      },



      //Form View Field

      formFieldView:{
        width: "95%",
        borderRadius: 40,
        marginTop:30,
        height: 50,
        backgroundColor: Colour.grey,
        flexDirection: "row",
        justifyContent:'center',
        paddingLeft: 20,
        
      },
      formErr:{
        color: Colour.red,
        fontSize: 12,
        textAlign: 'left',
        width: "80%",
        paddingLeft:20
      },
      forgotPass:{
        textAlign: 'left',
        width: "85%",
        color: Colour.primaryColor,
        fontWeight: "bold",
        marginTop:15,
        marginBottom: 60,
      },
      noAcct:{
        flexDirection: 'row',
        marginTop:7,
      },
      regText:{
        color: Colour.primaryColor,
        fontWeight: "bold",
      },
      regNavView:{
        position: 'absolute',
        right:0,
        bottom:8,
        width:50,
        height:40,
        backgroundColor: Colour.primaryColor,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        alignItems: 'center',
        justifyContent: 'center'
      }
});

export default styleApp;