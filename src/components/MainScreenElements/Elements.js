import React from "react";
import {View, StyleSheet} from "react-native";
import MainScreenComp from "../MainComp/MainComp";
import Record from "../SpeechRecognitioncomp/RecordAudio";



const ElementsComp=(props)=>{
    return(
        <MainScreenComp Maincontents={
            <View style={Styles.ShowText}>
                <View style={Styles.TextRender}>
                    {props.TextArea}
                </View>
                <Record></Record>
            </View>
        }>

        </MainScreenComp>
    )
};
const Styles = StyleSheet.create({
    ShowText:{
        position:"relative",
        width:"90%",
        left:"5%",
        top:"5%",
        height:"90%",
        borderRadius:10
    },
    TextRender:{
        position:"relative",
        width:"100%",
        height:"60%",
        borderRadius:10,
        marginBottom:40
    },
    
})
export default ElementsComp;