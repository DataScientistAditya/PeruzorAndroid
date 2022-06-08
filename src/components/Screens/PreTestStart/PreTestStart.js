import React,{useEffect} from "react";
import {View, StyleSheet, Text} from "react-native";
import ElementsComp from "../../MainScreenElements/Elements";
import SpeechToTextComp from "../../SpeechRecognitioncomp/SpeechTotText";

const PreStartTestScreen=()=>{
    return(
        <ElementsComp TextArea={
            <View style={Styles.TextShowArea}>
                <Text style={Styles.MainText}>Welcome to Peruzor</Text>
            </View>
        }>

        </ElementsComp>
    )
};

const Styles = StyleSheet.create({
    TextShowArea:{
        position:"relative",
        width:"100%",
        height:"100%",
        alignItems:"center"
    },
    MainText:{
        position:"relative",
        fontSize:16,
        color:"#FFFF"
    }
})
export default PreStartTestScreen;