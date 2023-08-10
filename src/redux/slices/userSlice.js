import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userToken: "",
    userId: "",
    userName: "",
    userImg: "",
    userEmail: "",
  },
  reducers: {
    login: (state, action) => {
      state.userToken = action.payload.userToken;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userImg = action.payload.userImg;

      state.userEmail = action.payload.userEmail;
    },
    logout: (state) => {
      state.userToken = "";
      state.userId = "";
      state.userName = "";
      state.userImg = "";
      state.userEmail = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
