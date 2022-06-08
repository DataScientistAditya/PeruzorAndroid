import React,{useState, useEffect} from "react";
import Voice,{SpeechRecognizedEvent,SpeechResultsEvent,SpeechErrorEvent} from '@react-native-voice/voice';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Button
  } from 'react-native';

import usePermissions from 'expo-permissions-hooks'

const MicroPhone = require("../../../assets/Icon/microphone.png");

const SpeechToTextComp = ()=>{
    const [pitch, SetPitch] = useState("");
    const [error, SetError] = useState("");
    const [end, SetEnd] = useState("");
    const [started, SetStarted] = useState("");
    const [results, SetResults] = useState([]);
    const [partialResults, SetPartialResults] = useState([]);
    const Permission = usePermissions('AUDIO_RECORDING');


    useEffect(()=>{
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
        
        return()=>{
            Voice.destroy().then(Voice.removeAllListeners);
        }
    },[]);

    const onSpeechStart = (e) => {
        console.log('onSpeechStart: ', e);
        SetStarted('√');
    };
    const onSpeechEnd = (e) => {
        console.log('onSpeechEnd: ', e);
        SetEnd('√')
    };
    
    const  onSpeechError = (e) => {
        console.log('onSpeechError: ', e);
        SetError(JSON.stringify(e.error));
    };

    const onSpeechResults = (e) => {
        console.log('onSpeechResults: ', e);
        SetResults(e.value);
    };

    const onSpeechPartialResults = (e) => {
        console.log('onSpeechPartialResults: ', e);
        SetPartialResults(e.value);
    };
    const onSpeechVolumeChanged = (e) => {
        console.log('onSpeechVolumeChanged: ', e);
        SetPitch(e.value);
    };

    const StartRecognizing = async()=>{
        
        try{
            await Voice.start('en-US');
            SetPitch("");
            SetError("");
            SetEnd("");
            SetStarted("");
            SetResults([]);
            SetPartialResults([]);
        }catch(e){
            console.log(e);
        }
    };

    const StopRecognizing= async()=>{
        try{
            await Voice.stop();
        }catch(e){
            console.log(e);
        }
    };
    const DestroyRecognizing = async()=>{
        try{
            await Voice.start('en-US');
            SetPitch("");
            SetError("");
            SetEnd("");
            SetStarted("");
            SetResults([]);
            SetPartialResults([]);
        }catch(e){
            console.log(e);
        }
    };

    return(
        <View style={styles.container}>
        <Text style={styles.stat}>Results</Text>
        {results.map((result, index) => {
          return (
            <Text key={`result-${index}`} style={styles.stat}>
              {result}
            </Text>
          );
        })}
        <Text style={styles.stat}>Partial Results</Text>
        {partialResults.map((result, index) => {
          return (
            <Text key={`partial-result-${index}`} style={styles.stat}>
              {result}
            </Text>
          );
        })}
        <Text style={styles.stat}>{`End: ${end}`}</Text>
        <TouchableHighlight onPress={StartRecognizing}>
          <Button title="Start"></Button>
        </TouchableHighlight>
        <TouchableHighlight onPress={StopRecognizing}>
          <Text style={styles.action}>Stop Recognizing</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={DestroyRecognizing}>
          <Text style={styles.action}>Destroy</Text>
        </TouchableHighlight>
      </View>
    )
    
}

const styles = StyleSheet.create({
    button: {
      width: 50,
      height: 50,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    action: {
      textAlign: 'center',
      color: '#0000FF',
      marginVertical: 5,
      fontWeight: 'bold',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    stat: {
      textAlign: 'center',
      color: '#B0171F',
      marginBottom: 1,
    },
  });

export default SpeechToTextComp;

