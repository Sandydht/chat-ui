import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SNACKBAR_TYPE } from "../constants/snackbar-type.constant";

interface SnackbarState {
  show: boolean;
  type: string;
  message: string;
}

const initialState: SnackbarState = {
  show: false,
  type: SNACKBAR_TYPE.INFO,
  message: ''
}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<SnackbarState>) => {
      state.show = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    closeSnackbar: (state) => {
      state.show = false;
      state.type = SNACKBAR_TYPE.INFO;
      state.message = '';
    }
  }
})

export const {
  showSnackbar,
  closeSnackbar
} = snackbarSlice.actions;

export default snackbarSlice.reducer
