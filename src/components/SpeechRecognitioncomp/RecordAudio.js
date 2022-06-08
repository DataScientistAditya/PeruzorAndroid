import React,{useState} from "react";
import { TouchableOpacity,Text,Image, StyleSheet,View } from "react-native";
import SpeechToTextComp from "./SpeechTotText";
import usePermissions from 'expo-permissions-hooks'

const MicroPhone = require("../../../assets/Icon/microphone.png");
const Record=()=>{

  const [isGranted,SetGranted] = useState(false);
  const Permission = usePermissions('AUDIO_RECORDING');


    return (
        
        <View style={Styles.MicrophoneContainer}>
            <Text>{`Status is ${Permission.status}`}</Text>
            {Permission.isUndetermined && (
              <>
                <Text>{'Permission is undetermined.'}</Text>
              <TouchableOpacity  onPress={Permission.ask}>
                  {/* <Text>{isGranted? "Stop Recording":"Start Recording"}</Text> */}
                  <Image  source={MicroPhone}></Image>
              </TouchableOpacity>
              </>
            )}
            {Permission.isGranted && (
              <SpeechToTextComp></SpeechToTextComp>
            )}
            {Permission.isDenied && (
              <TouchableOpacity  onPress={Permission.goToSettings}>
                <Text>{'Permission is denied.'}</Text>
                {/* <Text>{isGranted? "Stop Recording":"Start Recording"}</Text> */}
                <Image  source={MicroPhone}></Image>
            </TouchableOpacity>
              
              
            )}
      </View>
    )
};

const Styles= StyleSheet.create({
    MicrophoneContainer:{
        position:"relative",
        width:"50%",
        left:"25%",
        height:"20%",
        alignItems:"center"
    },
});

export default Record;


