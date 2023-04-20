import { createAsyncThunk } from "@reduxjs/toolkit";

const BE_URL = process.env.REACT_APP_BE_DEV_URL;

export const getAllPosts = createAsyncThunk("posts/getAll", async () => {
  try {
    const config = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    const response = await fetch(`${BE_URL}/posts`, config);
    if (response.ok) {
      const allPosts = await response.json();
      return allPosts;
    }
  } catch (error) {
    console.log("error fetching posts", error);
  }
});

export const addNewPost = createAsyncThunk(
  "posts/addPost",
  async ({ newPost }) => {
    try {
      const config = {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      const response = await fetch(`${BE_URL}/posts`, config);
      if (response.ok) {
        console.log("post addedd!");
      }
    } catch (error) {
      console.log("error adding post", error);
    }
  }
);
