import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './navigationSlice';
import snackbarReducer from './snackbarSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    snackbar: snackbarReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
