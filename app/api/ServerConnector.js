import { create } from "apisauce";

const clientConnector = create({
    baseURL : "http://192.168.43.68:9010/farmersconnect",
    timeout : 300000
});

export default clientConnector;