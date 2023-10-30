import React, {useState} from "react";

import CheckNetwork from "../api/NetworkChecker";
import Colour from "../assets/Colour";





export  default useFormApi = () => {

    const [loading, setLoading] = useState(false);
    const [notificationAlert, setNotificationAlert] = useState(false);
    const [notificationText, setNotificationText] = useState("");
    const [notificationTextColor, setNotificationTextColor] = useState(Colour.white);


    const checkNetwork = () => {
        return CheckNetwork
    }


    const setNotifier = (notiText, notiColor, notiVisibility, isLoading) => {
        setNotificationText(notiText);
        setNotificationTextColor(notiColor);
        setNotificationAlert(notiVisibility);
        setLoading(isLoading);
    }


return {
    checkNetwork,
    loading,
    notificationAlert,
    notificationText,
    notificationTextColor,
    setNotifier,
}
}