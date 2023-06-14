import { createAsyncThunk } from "@reduxjs/toolkit";

const BE_URL = process.env.REACT_APP_BE_DEV_URL;

export const getAllExperiences = createAsyncThunk(
  "exp/getAll",
  async (userId) => {
    try {
      const config = {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      const response = await fetch(
        `${BE_URL}/users/${userId}/experiences`,
        config
      );
      if (response.ok) {
        const experiences = await response.json();
        return experiences;
      }
    } catch (error) {
      console.log("error fetching user experiences", error);
    }
  }
);

export const addSingleExperience = createAsyncThunk(
  "exp/add",
  async ({ userId, expId, data }) => {
    try {
      const config = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      await fetch(`${BE_URL}/users/${userId}/experiences/${expId}`, config);
    } catch (error) {
      console.log("error updating user experiences", error);
    }
  }
);

export const updateSingleExperience = createAsyncThunk(
  "exp/update",
  async ({ userId, expId, data }) => {
    try {
      const config = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      await fetch(`${BE_URL}/users/${userId}/experiences/${expId}`, config);
    } catch (error) {
      console.log("error updating user experiences", error);
    }
  }
);

export const deleteSingleExperience = createAsyncThunk(
  "exp/delete",
  async ({ userId, expId }) => {
    try {
      const config = {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      const response = await fetch(
        `${BE_URL}/users/${userId}/experiences/${expId}`,
        config
      );
      if (response.ok) {
        console.log("experience successfully deleted!");
      }
    } catch (error) {
      console.log("error deleting exp", error);
    }
  }
);

export const addImageToExperience = createAsyncThunk(
  "exp/addImg",
  async ({ userId, expId, image }) => {
    const form = new FormData();
    form.append("experience", image);
    try {
      const config = {
        method: "POST",
        body: form,
      };
      const response = await fetch(
        `${BE_URL}/users/${userId}/experiences/${expId}/image`,
        config
      );
      if (response.ok) {
        console.log("picture added");
      }
    } catch (error) {
      console.log("error adding exp image", error);
    }
  }
);
