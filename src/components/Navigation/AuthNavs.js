import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen/Login";
import RegisterScreen from "../Screens/RegistrationScreen/Register";
import { Text } from "react-native";

const StackScreen = createStackNavigator();


function AuthStack(){
   return(
    <StackScreen.Navigator initialRouteName="Login">
    <StackScreen.Screen name="Login" component={LoginScreen} options={{
             headerShown:true,
             headerTintColor:"#81FFC2",
             headerStyle:{
                 backgroundColor:"#004D42"
             },
             headerTitle:()=>(
                 <Text style={{fontSize:20, fontWeight:"bold", color:"#FFFF"}}>
                     LOGIN
                 </Text>
             )
         }}></StackScreen.Screen>

     <StackScreen.Screen name="Register" component={RegisterScreen} options={{
             headerShown:true,
             headerTintColor:"#81FFC2",
             headerLeft:(props)=>null,
             headerStyle:{
                 backgroundColor:"#004D42"
             },
             headerTitle:()=>(
                 <Text style={{fontSize:20, fontWeight:"bold", color:"#FFFF"}}>
                     REGISTER
                 </Text>
             )
         }}></StackScreen.Screen>
     
 </StackScreen.Navigator>
   )
};


export default AuthStack;