import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthenticationState {
  isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
  isAuthenticated: false
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    }
  }
})

export const { 
  setIsAuthenticated
} = authenticationSlice.actions; 

export default authenticationSlice.reducer
