import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: {
    id: 0,
    video: "",
    title: "",
    author: "",
    watch: 0,
  },
};

export const axiosData = createAsyncThunk("form/axiosData", async (data) => {
  await axios.post("http://localhost:4200/videos/").then((res) => {
    return res.data;
  });
});

const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data.video = action.payload.video;
      state.data.title = action.payload.title;
      state.data.author = action.payload.author;
      state.data.watch = action.payload.watch;
    },
    addPost: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: {
    [axiosData.pending]: (state, action) => {},
    [axiosData.fulfilled]: (state, action) => {},
  },
});
export const { setData } = FormSlice.actions;
export default FormSlice.reducer;
