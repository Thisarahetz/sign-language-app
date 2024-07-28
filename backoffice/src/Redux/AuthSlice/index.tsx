import { createSlice } from "@reduxjs/toolkit";

export type UserData = {
  status: boolean;
  status_code: number;
  message: string;
  data: Data;
};

export type Data = {
  token: string;
  user: User;
};

export type User = {
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  phone_number: string;
  country_code: string;
  profile_image: string;
  user_id: null;
  permissions: Permission[];
};

export type Permission = {
  key: string;
  module_type: string;
  value: Module[];
};

export type Module = {
  module_id: string;
  module_name: string;
  module_route: string;
  action: number[];
};

const initialState: UserData = {
  status: false,
  status_code: 0,
  message: "",
  data: {
    token: "",
    user: {
      email: "",
      first_name: "",
      last_name: "",
      role:"",
      phone_number:"",
      country_code:"",
      user_id: null,
      profile_image:"",
      permissions: [],
    },
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.data.token = action.payload;
    },
    setUserData(state, action) {
      state.data.user = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    clearMessage(state) {
      state.message = "";
    },
    setUserImage(state, action) {
      state.data.user.profile_image = action.payload;
    },
    // setUserFeatureCategorys(state, action) {
    //   state.user.userFeatureCategorys = action.payload;
    // },
    // clearUserFeatureCategorys(state) {
    //   state.user.userFeatureCategorys = null;
    // },
  },
});

export const {
  setToken,
  setMessage,
  clearMessage,
  setUserData,
  setUserImage,
  //   setUser,
  //   setUserFeatureCategorys,
  //   clearUserFeatureCategorys,
} = authSlice.actions;

export default authSlice.reducer;
