import * as SecureStore from 'expo-secure-store';


const storeItem = async (key,item) => {
    try { 
        await SecureStore.setItemAsync(key, item);
    } catch (error) {
        console.log("Error occured storing item", error)
    }
}

const getItem = async (key) => {
    try { 
        return  await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log("Error occured getting item", error)
    }
}

const deleteItem = async (key) => {
    try { 
        return  await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log("Error occured deleting item", error)
    }
}

export default {
    storeItem,
    getItem,
    deleteItem
}