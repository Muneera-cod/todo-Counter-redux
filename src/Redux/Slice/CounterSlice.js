import { createSlice } from "@reduxjs/toolkit";
const initialState={value:0,}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrementby1:(state)=>{
          state.value += 1
        },
        incrementby5:(state)=>{
            state.value += 5
          },
          decrementby1:(state)=>{
            state.value -= 1
          },
          decrementby5:(state)=>{
            state.value -= 5
          },
          reset:(state)=>{
              state.value=0
          }
    }
})

export const  { incrementby1, incrementby5,decrementby1,decrementby5,reset}=counterSlice.actions
export const counterReducer=counterSlice.reducer