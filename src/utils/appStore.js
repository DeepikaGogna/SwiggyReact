import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import dataSlice from "./dataSlice"
import loginSlice from "./loginSlice";

const appStore = configureStore({
    reducer:{
        cart:cartSlice,
        data: dataSlice,
        login:loginSlice
        
    }
})

export default appStore;