import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NavigationItemData } from "../components/NavigationBar.components";
import MessageIcon from '../assets/images/svg/message_24px_outlined.svg';
import { NAVIGATION_TYPE } from "../constants/navigation-type.constants";
import { SIDE_BAR_TYPE } from "../constants/side-bar-type.constants";

interface NavigationState {
  selectedNavigation: NavigationItemData;
  selectedSidebar: string;
}

const initialState: NavigationState = {
  selectedNavigation: {
    icon: MessageIcon,
    labelText: 'Percakapan',
    value: NAVIGATION_TYPE.CHAT
  },
  selectedSidebar: SIDE_BAR_TYPE.MAIN
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    selectNavigation: (state, action: PayloadAction<NavigationItemData>) => {
      state.selectedNavigation = action.payload;
    },
    resetSelectedNavigation: (state) => {
      state.selectedNavigation.icon = MessageIcon;
      state.selectedNavigation.labelText = 'Percakapan';
      state.selectedNavigation.value = NAVIGATION_TYPE.CHAT;
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
