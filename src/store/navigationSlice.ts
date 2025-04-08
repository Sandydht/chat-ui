import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NAVIGATION_TYPE } from "../constants/navigation-type.constant";
import { SIDE_BAR_TYPE } from "../constants/side-bar-type.constant";

interface NavigationState {
  selectedNavigation: string;
  selectedSidebar: string;
}

const initialState: NavigationState = {
  selectedNavigation: NAVIGATION_TYPE.CHAT,
  selectedSidebar: SIDE_BAR_TYPE.MAIN
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    selectNavigation: (state, action: PayloadAction<string>) => {
      state.selectedNavigation = action.payload;
    },
    resetSelectedNavigation: (state) => {
      state.selectedNavigation = NAVIGATION_TYPE.CHAT;
    },
    selectSidebar: (state, action: PayloadAction<string>) => {
      state.selectedSidebar = action.payload;
    },
    resetSelectedSidebar: (state) => {
      state.selectedSidebar = SIDE_BAR_TYPE.MAIN;
    }
  }
})

export const {
  selectNavigation,
  resetSelectedNavigation,
  selectSidebar,
  resetSelectedSidebar
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
