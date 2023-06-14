import { createAsyncThunk } from "@reduxjs/toolkit";

const BE_URL = process.env.REACT_APP_BE_DEV_URL;

export const getAllEducation = createAsyncThunk(
  "edu/getAll",
  async (userId) => {
    try {
      const config = {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      const response = await fetch(
        `${BE_URL}/users/${userId}/education`,
        config
      );
      if (response.ok) {
        const education = await response.json();
        return education;
      }
    } catch (error) {
      console.log("error fetching user education", error);
    }
  }
);

export const addSingleEducation = createAsyncThunk(
  "edu/add",
  async ({ userId, eduId, data }) => {
    try {
      const config = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      await fetch(`${BE_URL}/users/${userId}/education/${eduId}`, config);
    } catch (error) {
      console.log("error updating user education", error);
    }
  }
);

export const updateSingleEducation = createAsyncThunk(
  "edu/update",
  async ({ userId, eduId, data }) => {
    try {
      const config = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      await fetch(`${BE_URL}/users/${userId}/education/${eduId}`, config);
    } catch (error) {
      console.log("error updating user education", error);
    }
  }
);

export const deleteSingleEducation = createAsyncThunk(
  "edu/delete",
  async ({ userId, eduId }) => {
    try {
      const config = {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      const response = await fetch(
        `${BE_URL}/users/${userId}/education/${eduId}`,
        config
      );
      if (response.ok) {
        console.log("education successfully deleted!");
      }
    } catch (error) {
      console.log("error deleting exp", error);
    }
  }
);
