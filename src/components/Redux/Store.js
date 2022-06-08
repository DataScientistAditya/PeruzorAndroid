import { configureStore } from "@reduxjs/toolkit";
import AuthSlicer from "./Slicer";


export const Store =configureStore({
    reducer:{
        userauth: AuthSlicer
    },
})