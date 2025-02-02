import { createAsyncThunk } from "@reduxjs/toolkit";

import { travelTrucksApi } from "../../services/api";

// -------------------- Fetch All Campers --------------------

export const fetchCampers = createAsyncThunk(
  "campers/fetchFiltered",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const filters = state.filters;

      let queryParams = new URLSearchParams();

      if (filters.location) queryParams.append("location", filters.location);
      if (filters.vehicleType) queryParams.append("form", filters.vehicleType);
      if (filters.transmission === "automatic")
        queryParams.append("transmission", "automatic");
      if (filters.engine) queryParams.append("engine", filters.engine);
      if (filters.equipment.length) {
        filters.equipment.forEach((item) => queryParams.append(item, "true"));
      }

      const response = await travelTrucksApi.get(
        `/campers?${queryParams.toString()}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.status === 404
          ? "No campers found. Try changing the filters."
          : error.response?.data || error.message
      );
    }
  }
);

// -------------------- Fetch Campers By Id --------------------

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const { data } = await travelTrucksApi.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
