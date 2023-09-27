import { configureStore } from '@reduxjs/toolkit'
import DarkmodeReducer from '../features/darkmode/darkModeSlice'
import counterSliceReducer  from '../features/counter/counterSlice'
console.log(DarkmodeReducer)
export const store = configureStore({
  reducer: {
    darkMode: DarkmodeReducer,
    counterMode: counterSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch