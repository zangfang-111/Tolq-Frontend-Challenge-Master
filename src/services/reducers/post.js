import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const postSlice = createSlice({
  name: "selectedPost",
  initialState,
  reducers: {
    setPost(state, action) {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPost } = postSlice.actions;

export default postSlice.reducer;
