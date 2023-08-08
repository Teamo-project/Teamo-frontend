import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user_token: "",
    user_id: "",
    user_name: "",
    user_img: "",
    user_email: "",
  },
  reducers: {
    login: (state, action) => {
      state.user_token = action.payload.user_token;
      state.user_id = action.payload.user_id;
      state.user_name = action.payload.user_name;
      state.user_img = action.payload.user_img;
      state.user_email = action.payload.user_email;
    },
    logout: (state) => {
      state.user_token = "";
      state.user_id = "";
      state.user_name = "";
      state.user_img = "";
      state.user_email = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
