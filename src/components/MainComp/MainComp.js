import React from "react";
import { View,Text,Dimensions,StyleSheet, SafeAreaView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const MainScreenComp=(props)=>{
    return(
        <SafeAreaView style={Styles.container}>
            <LinearGradient colors={["#B7F5FF","#087288"]} start={{x: -1, y: 0.5 }} style={Styles.contents}>
                <View style={Styles.MainContents}>
                    {props.Maincontents}
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        width:Width,
        height:Height,
    },
    contents:{
        width:"100%",
        height:"100%",
        position:"absolute",
    },
    MainContents:{
        position:"absolute",
        height:(Height>740)? 450:400,
        width:"90%",
        left:"5%",
        top:(Height>740)? 120: 110,
        backgroundColor:"#5D7D8E",
        borderRadius:15,
        overflow:"hidden",
        padding:20
    }
});


export default MainScreenComp;