import { NavigationContainer } from "@react-navigation/native";
import StackNavs from "./Nav";
import AuthStack from "./AuthNavs";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../Redux/Slicer";

const AppRoute =()=>{
    
    const isAuthenticate = useSelector(selectIsLoggedIn);
    return(
        <NavigationContainer>
            {isAuthenticate? <StackNavs /> : <AuthStack/>}
        </NavigationContainer>
    )
};


export default AppRoute;