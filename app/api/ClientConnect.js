import clientConnector  from './ServerConnector';

const authUser = (data) => clientConnector.post('/authuser', data)

export default {
    authUser,
}