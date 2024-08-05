import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        name: ""
    };

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
          state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;
export const filtersReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;