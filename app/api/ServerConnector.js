import { create } from "apisauce";

const clientConnector = create({
    baseURL : "http://localhost:80/farmersconnect"
});

export default clientConnector;