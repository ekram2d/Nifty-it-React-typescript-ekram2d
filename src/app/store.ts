import { configureStore } from '@reduxjs/toolkit'
import DarkmodeReducer from '../features/darkmode/darkModeSlice'
console.log(DarkmodeReducer)
export const store = configureStore({
  reducer: {
    darkMode: DarkmodeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch