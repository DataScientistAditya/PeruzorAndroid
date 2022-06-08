import React,{useState, useEffect} from "react";
import { LogBox } from "react-native";
import {  SafeAreaView, Dimensions, StyleSheet, TextInput, AppState } from "react-native";
import AuthCompScreen from "../../AuthComp/Authcomp";
import InputComps from "../../AuthComp/InputsComp";
import { useDispatch } from "react-redux";
import { setSignin } from "../../Redux/Slicer";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;



const LoginScreen=({navigation})=>{
    

    const [EmailInput,SetEmailInput] = useState("");
    const [PasswordInput,SetPasswordInput] = useState("");
    const [UserData,SetUserData] = useState({isloggedin:false,usertoken:null});
    const [UserExperienceMessege,SetUserExperienceMessege] = useState("");
   
   

    const dispatch = useDispatch();

    
    useEffect(()=>{
        const getData = async () => {
            try {
                const UserName = await AsyncStorage.getItem('user');
                console.debug(UserName);
                if (UserName !=null) {
                    SetUserData({isloggedin:true,usertoken:UserName});
                    dispatch(setSignin(UserData));
                };
            } catch(e) {
                // error reading value
                return null
            }
        };

        getData().catch(console.error);
        
    },[]);
    const HandleEmailInput=(email)=>{
        SetEmailInput(email);
    };

    const HandlePasswordInput=(pass)=>{
        SetPasswordInput(pass);
    };

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('user', value)
        } catch (e) {
          // saving error
        }
    };
    
    
    const Routing= async ()=>{
        if (EmailInput !=="" && PasswordInput !=="") {
            const LoginData = {
                email:EmailInput,
                password:PasswordInput,
            }
            const ApiResponse =await fetch('https://iamadityachakraborty.pythonanywhere.com/Login',{
                method:"POST",
                body:JSON.stringify(LoginData),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (ApiResponse.ok) {
                const RespData = await ApiResponse.json().then(
                    (Resp)=>{
                        
                            storeData(Resp.Ud);
                            SetUserData({isloggedin:true,usertoken:Resp.Ud});
                            dispatch(setSignin(UserData));
                    }
                )
            }else{
                SetUserExperienceMessege("Email or Password is incorrect");
            }

        }else{
            SetUserExperienceMessege("Please enter both email and password");
        }
    };
    useEffect(()=>{
        const Subs = AppState.addEventListener('change',()=>{
            LogBox.ignoreLogs(["EventEmitter.removeListener",'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',])
        });
        return () => {
            Subs.remove()
        }
    });

   
    return(
        <SafeAreaView style={Styles.container}>
           <AuthCompScreen 
                HeaderScreen="LOGIN"
                Messeges={UserExperienceMessege}
                EmailInput= {<InputComps 
                                loginInput={Styles.loginInput} 
                                Inputs={Styles.Inputs} 
                                keyboard = 'email-address' 
                                Placeholder="enter your email" 
                                secureentry={false} 
                                auto={false}
                                InputEvent={HandleEmailInput}>
                            </InputComps>}
                PasswordInput= {<InputComps 
                                    loginInput={Styles.loginInput} 
                                    Inputs={Styles.Inputs} 
                                    Placeholder="enter your password"
                                    secureentry={true}
                                    auto={false}
                                    InputEvent={HandlePasswordInput}>
                                </InputComps>} 
                ButtonTitle="Login" FooterText="Dont have an Account?" 
                ButtonClick={Routing}
                Routes={()=>navigation.navigate("Register")} 
                RotesTitle="Create Account">
           </AuthCompScreen>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({

    container:{
        flex:1,
        width:Width,
        height:Height,
    },
    loginInput:{
        position:"relative",
        width:"100%",
        height:60,
        borderColor:"#ECECEC",
        borderWidth:2,
        borderRadius:10,
        marginTop:20,
        
    },
    Inputs:{
        position:"relative",
        width:"100%",
        height:"100%",
        textAlign:"center",
    },
})


export default LoginScreen;
