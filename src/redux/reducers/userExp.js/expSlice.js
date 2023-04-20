import { createSlice } from "@reduxjs/toolkit";
import {
  addImageToExperience,
  addSingleExperience,
  getAllExperiences,
} from "./experiences";

const initialState = {
  experiencesData: [],
  error: false,
  addedExp: null,
  expPicture: null,
  showModal: false,
  showEditExpSection: false,
  currentExpData: null,
  loading: false,
};

const expSlice = createSlice({
  name: "exp",
  initialState,
  reducers: {
    addExpImage: (state, action) => {
      state.expPicture = action.payload;
    },
    showEditModal: (state) => {
      state.showModal = true;
    },
    hideEditModal: (state) => {
      state.showModal = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllExperiences.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllExperiences.fulfilled, (state, action) => {
        state.loading = false;
        state.experiencesData = action.payload;
      });
  },
});

export const expActions = expSlice.actions;
export default expSlice.reducer;
