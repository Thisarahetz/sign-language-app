import { createSlice } from "@reduxjs/toolkit";
import {DASHBOARD_CONTENTS_KEYS} from "@src/Constants/dashboard";


type UserTypes = "admin" | "super_admin" ;

type DrawerState = {
  isClosed: boolean;
  isSubDrawerActions: boolean;
  isActive: number;
  CurrentUserType: UserTypes;
};

const initialState: DrawerState = {
  isClosed: false,
  isSubDrawerActions: false,
  isActive: DASHBOARD_CONTENTS_KEYS.DASHBOARD_KEY,
  CurrentUserType: "admin",
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.isClosed = !state.isClosed;
    },
    setSubDrawerActions: (state, action) => {
      state.isSubDrawerActions = action.payload;
    },
    clearSubDrawerActions: (state) => {
      state.isSubDrawerActions = false;
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    setCurrentUserType: (state, action) => {
      state.CurrentUserType = action.payload;
    },
  },
});

export const {
  toggleDrawer,
  setSubDrawerActions,
  clearSubDrawerActions,
  setIsActive,
  setCurrentUserType,
} = drawerSlice.actions;

export default drawerSlice.reducer;
