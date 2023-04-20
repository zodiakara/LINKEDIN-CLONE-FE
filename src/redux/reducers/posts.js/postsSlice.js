import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./posts";

const initialState = {
  posts: [],
  loading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      });
  },
});
export const postActions = postsSlice.actions;
export default postsSlice.reducer;
