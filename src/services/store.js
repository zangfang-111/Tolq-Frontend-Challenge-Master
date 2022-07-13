import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./reducers/post";

import { apiSlice } from "./api/slice";

export const store = configureStore({
  reducer: {
    selectedPost: postReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
