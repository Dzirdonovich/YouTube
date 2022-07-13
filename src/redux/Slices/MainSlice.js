import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  login: false,
  user: {
    name: "",
    password: "",
  },
};
const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    checkUser: (state, action) => {
      state.user.name = action.payload.name;
      state.user.password = action.payload.password;
    },
    setLoginTrue: (state, action) => {
      state.login = true;
    },
    setUser: (state, action) => {
      state.user.name = action.payload;
    },
  },
});
export const { checkUser, setLoginTrue, setUser } = MainSlice.actions;
export default MainSlice.reducer;
