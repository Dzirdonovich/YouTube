import { combineReducers, configureStore } from "@reduxjs/toolkit";
import headerReducer from "./Slices/HeaderSlide";
import contentSlice from "./Slices/ContentSlice";
import FormSlice from "./Slices/FormSlice";
import MainSlice from "./Slices/MainSlice";
import { videosApi } from "./VideosApi";

const rootReducer = combineReducers({
  header: headerReducer,
  content: contentSlice,
  form: FormSlice,
  main: MainSlice,
  [videosApi.reducerPath]: videosApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videosApi.middleware),
});
