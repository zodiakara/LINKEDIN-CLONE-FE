import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  uploadUserAvatar,
  getCurrentUser,
  updateUserInfo,
  loginUser,
} from "./userAuthActions";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  userAvatar: null,
  editModal: false,
  avatarModal: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAvatar: (state, action) => {
      state.userAvatar = action.payload;
    },
    removeAvatar: (state, action) => {
      state.userAvatar = null;
    },
    logout: (state) => {
      state.userInfo = null;
      state.userAvatar = null;
      localStorage.clear();
    },
    showEditModal: (state) => {
      state.editModal = true;
    },
    hideEditModal: (state) => {
      state.editModal = false;
    },
    showPictureModal: (state) => {
      state.avatarModal = true;
    },
    hidePictureModal: (state) => {
      state.avatarModal = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(uploadUserAvatar.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateUserInfo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
