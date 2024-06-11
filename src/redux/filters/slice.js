import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export default filtersSlice.reducer;

export const selectNameFilter = (state) => {
  return state.filters.name;
};

export const { changeFilter } = filtersSlice.actions;
