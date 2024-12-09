import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartInfo:[],
        popUp:false,
        resturantInfo:{},
        resturantDetail:{}
    },
    reducers:{
        addCart:(state,action)=>{
            state.cartInfo.push(action.payload.cart)
            state.resturantDetail = action.payload.rest
        },
        removeCart:(state,action)=>{
            state.cartInfo.pop(action.payload)
        },
        OpenPopup:(state)=>{
           state.popUp = !state.popUp
        },
        addResturantDetail:(state, action)=>{
            state.resturantInfo = action.payload;
        }
    }
})

export const {addCart, OpenPopup, removeCart, addResturantDetail} = cartSlice.actions;
export default cartSlice.reducer