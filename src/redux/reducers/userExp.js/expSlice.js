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
  showAddExpModal: false,
  showEditExpModal: false,
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
    showAddExpModal: (state) => {
      state.showAddExpModal = true;
    },
    hideAddExpModal: (state) => {
      state.showAddExpModal = false;
    },
    showEditExpModal: (state) => {
      state.showEditExpModal = true;
    },
    hideEditExpModal: (state) => {
      state.showEditExpModal = false;
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
