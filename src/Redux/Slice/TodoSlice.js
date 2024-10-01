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
        edittodo: (state, action) => {
            const { id, text } = action.payload;
            const index=state.findIndex((t)=>t.id===id)
            state[index].text = text;
        }
    }
})
export const {addtodo,deltodo,edittodo}=todoSlice.actions
export const todoReducer=todoSlice.reducer