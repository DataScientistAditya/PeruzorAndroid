import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import StartScreen from "../Screens/StartScreen/StartScreen";
import PreStartTestScreen from "../Screens/PreTestStart/PreTestStart";
import SettingsScreen from "../Screens/SettingScreen/SettingScreen";


const StackScreen = createStackNavigator();
const TabNavScreen = createBottomTabNavigator();
const icon = <FontAwesome5 name={'ellipsis-v'} solid color="#FFFF" size={18}/>;

const LogoutImage = require("../../../assets/Icon/logout.png");


function StackNavs(){
    
    return(
        <StackScreen.Navigator initialRouteName="Start">
            <StackScreen.Screen name="Start" component={StartScreen} options={({navigation})=>({
                headerShown:true,
                headerStyle:{
                    backgroundColor:"#004D42"
                },
                headerRight:()=>(
                    <TouchableOpacity style={Styles.LogoutButton} onPress={()=>navigation.navigate("Settings")}>
                        {/* <Image style={Styles.ImageConatainer} source={LogoutImage}></Image> */}
                        {/* <Icon style={Styles.ImageConatainer} name="th-large"></Icon> */}
                        {icon}
                    </TouchableOpacity>
                ),
                headerTitle:()=>(
                    <Text style={{fontSize:20, fontWeight:"bold", color:"#FFFF"}}>
                        START
                    </Text>
                )
            })}></StackScreen.Screen>
            <StackScreen.Screen name="PreTest" component={PreStartTestScreen} options={{
                    headerShown:true,
                    headerTintColor:"#81FFC2",
                    
                    headerStyle:{
                        backgroundColor:"#004D42"
                    },
                    headerTitle:()=>(
                        <Text style={{fontSize:20, fontWeight:"bold", color:"#FFFF"}}>
                            INTRODUCTION
                        </Text>
                    )
                }}></StackScreen.Screen>
                <StackScreen.Screen name="Settings" component={SettingsScreen}
                        options={{
                            headerShown:true,
                            headerStyle:{
                                backgroundColor:"#004D42"
                            },
                            headerTitle:()=>(
                                <Text style={{fontSize:20, fontWeight:"bold", color:"#FFFF"}}>
                                    SETTINGS
                                </Text>
                            )
                        }}>

                </StackScreen.Screen>
        </StackScreen.Navigator>
    )
};

const Styles = StyleSheet.create({
    LogoutButton:{
        position:"absolute",
        width:32,
        height:32,
        padding:5,
        overflow:"hidden",
        right:10
    },
    ImageConatainer:{
        position:"relative",
        width:"100%",
        height:"100%",
    }
})
export default StackNavs;