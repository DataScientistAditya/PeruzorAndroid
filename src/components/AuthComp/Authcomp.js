import React from "react";
import { View, Text, StyleSheet, Button, Dimensions  } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height

const AuthCompScreen=(props)=>{
    return(
        <LinearGradient colors={["#B7F5FF","#087288"]} start={{x: -1, y: 0.5 }} style={Styles.contents}>
            <View style={Styles.logincontainer}>
                <View style={Styles.Header}>
                    <Text style={Styles.HeaderText}>{props.HeaderScreen}</Text>
                </View>
                <View style={Styles.MessegeLog}>
                    <Text style={Styles.MessegeText}>{props.Messeges}</Text>
                </View>
                    {props.EmailInput}
                    {props.UsernameInput}
                    {props.PasswordInput}
                <View style={Styles.buttonInput}>
                    <Button onPress={props.ButtonClick} title={props.ButtonTitle} color="#4E0481"></Button>
                </View>
                <View style={Styles.Footer}>
                    <Text style={Styles.TextAccount}>{props.FooterText}</Text>
                    <Text onPress={props.Routes} style={Styles.Regs}>{props.RotesTitle}</Text>
                </View>
            </View>
        </LinearGradient>
    )
};

const Styles = StyleSheet.create({
    contents:{
        width:"100%",
        height:"100%",
        position:"absolute",
    },
    logincontainer:{
        position:"relative",
        width:"90%",
        height:(Height>740)? 520:480,
        top:(Height>740)? 180:120,
        left:"5%",
        overflow:"hidden"
    },
    buttonInput:{
        position:"relative",
        width:"100%",
        borderColor:"#ECECEC",
        borderWidth:2,
        borderRadius:10,
        marginTop:20,
        overflow:"hidden"
    },
    Footer:{
        position:"relative",
        marginTop:"10%",
        width:"100%",
        height:"10%",
        
    },
    TextAccount:{
        position:"relative",
        fontSize:14,
        color:"#FFFF",
        textAlign:"center"
    },
    Regs:{
        position:"relative",
        fontSize:18,
        color:"#E2E2E2",
        textAlign:"center"
    },
    HeaderText:{
        color:"#FFFF",
        fontSize:34,
        fontWeight:"bold",
        marginBottom:"2%",
        textAlign:"center"
    },
    MessegeLog:{
        position:"relative",
        width:"100%",
        height:30,
        alignItems:"center",
    },
    MessegeText:{
        position:"relative",
        fontSize:14,
        fontWeight:"500",
        color:"#ECECEC",
    }
});

export default AuthCompScreen;