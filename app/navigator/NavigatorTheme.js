import { DefaultTheme } from "@react-navigation/native";
import Colour from "../assets/Colour";


export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colour.primaryColor,
        background: Colour.white
    }

}

 