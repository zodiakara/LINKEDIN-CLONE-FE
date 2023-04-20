import { createAsyncThunk } from "@reduxjs/toolkit";

const BE_URL = process.env.REACT_APP_BE_DEV_URL;

export const getAllUsers = createAsyncThunk("users/getAll", async () => {
  try {
    const response = await fetch(`${BE_URL}/users`);
    if (response.ok) {
      const users = await response.json();
      return users;
    }
  } catch (error) {
    console.log("error fetching users", error);
  }
});

export const getSingleUser = createAsyncThunk(
  "users/getSingleuser",
  async (userId) => {
    try {
      const response = await fetch(`${BE_URL}/users/${userId}`);
      if (response.ok) {
        const user = await response.json();
        return user;
      }
    } catch (error) {
      console.log("error fetching user", error);
    }
  }
);

// add later
// export const setRandomUser = createAsyncThunk("")
