import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filters.name;
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
