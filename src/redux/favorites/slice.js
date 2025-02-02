import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
