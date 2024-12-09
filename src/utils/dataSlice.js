import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:'data',
    initialState:{
        apiResponse:{}
    },
    reducers:{
        addApiResponse:(state,action)=>{
            state.apiResponse = action.payload
        }
    }
})

export const {addApiResponse} = dataSlice.actions
export default dataSlice.reducer