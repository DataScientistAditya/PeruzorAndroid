import { createSlice } from "@reduxjs/toolkit";


const InitialState={
    isloggedin:false,
    usertoken:null,
}


const AuthSlicer = createSlice({
    name:"userauth",
    initialState:InitialState,
    reducers:{
        setSignin:(state, action)=>{
            state.usertoken = action.payload.token;
            state.isloggedin = true;
        },
        
        setSignOut:(state)=>{
            state.isloggedin = false;
            state.usertoken = null;
        }
    }
});


export const {setSignin, setSignOut} = AuthSlicer.actions;

export const selectIsLoggedIn = (state)=> state.userauth.isloggedin;
export const selectUserToken = (state)=> state.userauth.usertoken;
export default AuthSlicer.reducer;