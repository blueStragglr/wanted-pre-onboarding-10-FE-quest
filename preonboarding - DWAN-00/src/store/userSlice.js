import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    nickname: "",
    email: "",
    password: "",
    isLogin: false,
  },
  reducers: {
    loginUser: (state, action) => {
      const { email, password } = action;
      state.email = email;
      state.password = password;
      state.isLogin = true;
    },
    clearUser: (state) => {
      state.email = "";
      state.password = "";
      state.isLogin = false;
    },
  },
});
export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
