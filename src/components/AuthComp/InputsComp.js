import React from "react";
import { View, TextInput } from "react-native";


const InputComps=(props)=>{
    return(
        <View style={props.loginInput}>
            <TextInput style={props.Inputs} 
                        keyboardType={props.keyboard} 
                        placeholder={props.Placeholder}
                        secureTextEntry={props.secureentry} 
                        autoCorrect={props.auto}
                        onChangeText={props.InputEvent}>
            </TextInput>
        </View>
    )
}

export default InputComps;