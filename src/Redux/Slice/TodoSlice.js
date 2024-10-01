import { createSlice } from "@reduxjs/toolkit";
const initialState=[]
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            state.push({id:Date.now(),text:action.payload})
        },
        deltodo:(state,action)=>{
            return state.filter((t)=>t.id !== action.payload)
        },
        // edittodo:(state,action)=>{

        // }
    }
})
export const {addtodo,deltodo}=todoSlice.actions
export const todoReducer=todoSlice.reducer