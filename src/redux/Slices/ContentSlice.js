import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
};

export const fetchVideos = createAsyncThunk(
  "content/fetchVideos",
  async function () {
    const response = await fetch("http://localhost:4200/videos");
    const data = await response.json();
    return data;
  }
);

const contentSlice = createSlice({
  name: "content",
  initialState,
  extraReducers: {
    [fetchVideos.fulfilled]: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export default contentSlice.reducer;
