import { StatusBar } from "expo-status-bar";
import React from "react";

import Colour from "../assets/Colour";


function AppStatusBar(props) {
    return (
        <StatusBar backgroundColor={Colour.primaryColor} />

    );
}

export default AppStatusBar;
