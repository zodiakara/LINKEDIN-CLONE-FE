import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getSingleUser } from "./users";

const initialState = {
  allProfiles: [],
  selectedProfile: null,
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    removeSingleUser: (state) => {
      state.selectedProfile = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allProfiles = action.payload;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.selectedProfile = action.payload;
      });
  },
});

export const userActions = usersSlice.actions;
export default usersSlice.reducer;
