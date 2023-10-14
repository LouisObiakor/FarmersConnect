import React, {useState} from "react";

import CheckNetwork from "../api/NetworkChecker";
import Colour from "../assets/Colour";





export  default useFormApi = (apiCaller) => {

    const [loading, setLoading] = useState(false);
    const [noNetworkAlert, setNetworkAlert] = useState(false);
    const [notificationAlert, setNotificationAlert] = useState(false);
    const [notificationText, setNotificationText] = useState("");
    const [notificationTextColor, setNotificationTextColor] = useState(Colour.white);
    const [responseData, setResponseData] = useState([]);


    const checkNetwork = () => {
        return CheckNetwork
    }

    const sendDataToServer = async (data) => {
         const response = await apiCaller(data);
        setResponseData(response);
    }


return {
    checkNetwork,
    loading,
    setLoading,
    noNetworkAlert,
    notificationAlert,
    setNotificationAlert,
    notificationText,
    setNotificationText,
    sendDataToServer,
    notificationTextColor,
    setNotificationTextColor,
    responseData,
}
}