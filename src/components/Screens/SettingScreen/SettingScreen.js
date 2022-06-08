import React,{useState} from "react";
import MainScreenComp from "../../MainComp/MainComp";
import { View, Text,Button, StyleSheet} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setSignOut } from "../../Redux/Slicer";
import { useDispatch } from "react-redux";

const SettingsScreen=()=>{

    const [UserName,SetUserName] = useState("");
    const icon = <FontAwesome5  name={'user-graduate'} solid color="#FFFF" size={60}/>;

    const getData = async () => {
        try {
          const UserName = await AsyncStorage.getItem('user');
          console.debug(UserName);
          const Username_Splt = (UserName !== null)? UserName.split("_",3) : null;
          if (Username_Splt !== null) {
            const User = Username_Splt[2];
            SetUserName(User); 
          }else{
            SetUserName("");
          }
          
        } catch(e) {
          // error reading value
          SetUserName("");
        }
      }
    
    getData();
    
    const romoveData= async ()=>{
        try{
            if (UserName!=="") {
                await AsyncStorage.removeItem("user");
            }
        }catch(e){
            console.debug(e);
        }
    }
    const dispatch = useDispatch();
    const LogoutHandler=()=>{
        romoveData();
        const Userdata={
            isloggedin:false,
            usertoken:null
        };
        dispatch(setSignOut(Userdata));
        
    };
    return(
        <MainScreenComp Maincontents={
            <View style={StyleSheet.SettingsContainer}>
                <View style={Styles.AvtarContainer}>
                    <View style={Styles.Avtar}>
                        {icon}
                    </View>
                        
                        <Text style={Styles.Text}>Welcome {UserName} !</Text>
                </View>
                <View style={Styles.LogoutButton}>
                    <Button color="#3C0B64" title="Sign out" onPress={LogoutHandler}></Button>
                </View>
            </View>
        }>

        </MainScreenComp>
    )
};


const Styles = StyleSheet.create({
    SettingsContainer:{
        position:"relative",
        width:"100%",
        height:"100%",
        alignItems:"center"
    },
    AvtarContainer:{
        position:"relative",
        width:"100%",
        height:"50%",
        alignItems:"center"
    },
    Avtar:{
        position:"relative",
        width:80,
        height:80,
        backgroundColor:"#2F3641",
        borderColor:"#FFFF",
        borderWidth:2,
        borderRadius:50,
        overflow:"hidden",
        alignItems:"center",
        padding:5,
    },
    Text:{
        fontSize:18,
        position:"relative",
        color:"#FFFF",
        marginTop:10
    },
    LogoutButton:{
        position:"relative",
        marginTop:10,
        width:"80%",
        height:50,
        left:"10%",
        alignItems:"center",
    }
})

export default SettingsScreen;