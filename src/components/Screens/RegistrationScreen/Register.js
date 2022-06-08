import React,{useState} from "react";
import { SafeAreaView, Dimensions, StyleSheet, TextInput } from "react-native";
import AuthCompScreen from "../../AuthComp/Authcomp";
import InputComps from "../../AuthComp/InputsComp";


const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height



const RegisterScreen=({navigation})=>{
    const [EmailInput, SetEmailInput] = useState("");
    const [UsernameInput, SetUsernameInput] = useState("");
    const [PasswordInput, SetPasswordInput] = useState("");
    const [UserExperienceMessege,SetUserExperienceMessege] = useState("");
    //const [UserData,SetUserData] = useState({isloggedin:false,usertoken:null});
    //const Dispatcher = useDispatch();

    const HandleEmailInput=(email)=>{
        SetEmailInput(email);
    };
    const HandleUsernameInput=(username)=>{
        SetUsernameInput(username);
    };
    const HandlePasswordInput=(pass)=>{
        SetPasswordInput(pass);
    };

    const Routes = async ()=>{
        if (EmailInput !== "" && UsernameInput !=="" && PasswordInput !=="") {
            const RegisterData = {
                email:EmailInput,
                username:UsernameInput,
                password:PasswordInput,
            };

            const ApiCreateAccountResp =await fetch('https://iamadityachakraborty.pythonanywhere.com/Register',{
                method:"POST",
                body:JSON.stringify(RegisterData),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (ApiCreateAccountResp.ok) {
                SetUserExperienceMessege("A mail has been sent to you, please verify your account and Login");
            }
            else{
                SetUserExperienceMessege("Email id is Already Present");
            }
        }
        else{
            SetUserExperienceMessege("Please Fill All the Fields");
        }
    }
    return(
        <SafeAreaView style={Styles.container}>
            <AuthCompScreen 
                HeaderScreen="REGISTER"
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
                UsernameInput={<InputComps 
                                    loginInput={Styles.loginInput}
                                    Placeholder="enter your username"  
                                    Inputs={Styles.Inputs} 
                                    secureentry={false}  
                                    auto={false}
                                    InputEvent={HandleUsernameInput}>
                                        
                                </InputComps>}
                PasswordInput= {<InputComps 
                                    loginInput={Styles.loginInput} 
                                    Inputs={Styles.Inputs} 
                                    Placeholder="enter your password"
                                    secureentry={true}
                                    auto={false}
                                    InputEvent={HandlePasswordInput}>
                                </InputComps>} 
                ButtonTitle="Register" FooterText="Existing User?" 
                ButtonClick={Routes}
                Routes={()=>navigation.navigate("Login")} 
                RotesTitle="Login">
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
export default RegisterScreen;
