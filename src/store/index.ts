import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from './authenticationSlice';
import navigationReducer from './navigationSlice';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    navigation: navigationReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
