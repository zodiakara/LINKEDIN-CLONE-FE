import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./posts";

const initialState = {
  posts: [],
  loading: false,
  postImage: null,
  postModal: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPostPicture: (state, action) => {
      state.postImage = action.payload;
    },
    removePostPicture: (state) => {
      state.postImage = null;
    },
    showPostModal: (state) => {
      state.postModal = true;
    },
    hidePostModal: (state) => {
      state.postModal = false;
    },
  },
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
