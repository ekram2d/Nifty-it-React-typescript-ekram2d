import { createSlice } from '@reduxjs/toolkit';

export interface DarkModeState {
  mode: 'white' | 'black' | boolean;
}

const initialState: DarkModeState = {
  mode: JSON.parse(localStorage.getItem("darkMode")!) || false,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode; // Toggle the mode
      localStorage.setItem("darkMode", JSON.stringify(state.mode));
    },
  },
});

// Export actions
export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
