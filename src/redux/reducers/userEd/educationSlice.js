import { createSlice } from "@reduxjs/toolkit";
import { getAllEducation } from "./education";
import expSlice from "../userExp/expSlice";

const initialState = {
  educationData: [],
  error: false,
  addedEd: null,
  AddEdModal: false,
  EditExpModal: false,
  currentEd: null,
  loading: false,
};

const eduSlice = createSlice({
  name: "edu",
  initialState,
  reducers: {
    showAddEdModal: (state) => {
      state.AddEdModal = true;
    },
    hideAddEduModal: (state) => {
      state.AddEdModal = false;
    },
    showEditExpModal: (state) => {
      state.EditExpModal = true;
    },
    hideEditExpModal: (state) => {
      state.EditExpModal = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEducation.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllEducation.fulfilled, (state, action) => {
        state.loading = false;
        state.educationData = action.payload;
      });
  },
});

export const eduActions = eduSlice.actions;
export default expSlice.reducer;
