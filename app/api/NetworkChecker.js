import { useNetInfo } from "@react-native-community/netinfo";

const CheckNetwork = () => {
    const network = useNetInfo();
    return network.isInternetReachable;
}

export default CheckNetwork;