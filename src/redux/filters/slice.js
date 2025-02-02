import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleType: "",
  equipment: [],
  transmission: "",
  engine: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
