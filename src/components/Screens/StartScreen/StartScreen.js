import React,{useEffect} from "react";
import { View, Text, Button, StyleSheet, Pressable,Dimensions } from "react-native";
import MainScreenComp from "../../MainComp/MainComp";



const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;



const StartScreen=({navigation})=>{
    
    const Routings=()=>{
        navigation.navigate("PreTest");
    };
   
    return(
        <MainScreenComp 
            Maincontents={
                <View style={Styles.ButtonsContainer}>
                    <Pressable onPress={Routings} style={Styles.ButtonStyle}>
                        <Text style={Styles.text}>Pre Test</Text>
                    </Pressable>
                    <Pressable style={Styles.ButtonStyle}>
                        <Text style={Styles.text}>Post Test</Text>
                    </Pressable>
                    <Pressable style={Styles.ButtonStyle}>
                        <Text style={Styles.text}>Inventory Test</Text>
                    </Pressable>
                    <Pressable style={Styles.ButtonStyle}>
                        <Text style={Styles.text}>Interest Test</Text>
                    </Pressable>
                </View>
            }>

        </MainScreenComp>
    )
};

const Styles = StyleSheet.create({
    ButtonsContainer:{
        position:"relative",
        width:"100%",
        height:"100%",
    },
    ButtonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#B20059",
        marginTop:(Height>740)?35:30,
        borderRadius:10,
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})
export default StartScreen;