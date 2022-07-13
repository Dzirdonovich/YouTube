import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavBarOpen: false,
};

const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setOpenNavBar(state) {
      state.isNavBarOpen = !state.isNavBarOpen;
    },
  },
});

export const { setOpenNavBar } = HeaderSlice.actions;
export default HeaderSlice.reducer;
