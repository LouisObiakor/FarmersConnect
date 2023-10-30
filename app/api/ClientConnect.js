import clientConnector  from './ServerConnector';

const authUser = (data) => clientConnector.post('/authfarmer', data);
const registerUser = (data) => clientConnector.post('/registerfarmer', data);
const sendMail = (data) => clientConnector.post('/sendmail', data);


export default {
    authUser,
    registerUser,
    sendMail,
}