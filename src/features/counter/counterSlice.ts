import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
    ,
    decrement: (state) => {
      state.value -= 1;
    }
    ,
    reset: (state) => {
      state.value = 0;
    },
    increaseByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }

});

export const { increment, decrement, reset, increaseByValue } = counterSlice.actions


export default counterSlice.reducer