import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './Slice/CounterSlice'
import { todoReducer } from './Slice/TodoSlice'
export const store = configureStore({
  reducer: {
    todo:todoReducer,
    counter:counterReducer
  },
})