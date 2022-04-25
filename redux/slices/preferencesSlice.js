import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  appTheme: 'light',
  systemTheme: false,
}

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    updateAppTheme: (state, actions) => {
      state.appTheme = actions.payload;
    },
    updateSystemTheme: (state) => {
      state.systemTheme = !state.systemTheme;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateAppTheme, updateSystemTheme } = preferencesSlice.actions

export default preferencesSlice.reducer