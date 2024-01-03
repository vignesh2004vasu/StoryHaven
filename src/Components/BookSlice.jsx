import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    selectedBook: null,
    isBookSelected: false,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    selectBook: (state, action) => {
      state.selectedBook = action.payload;
      state.isBookSelected = true;
    },
    deselectBook: (state) => {
      state.selectedBook = null;
      state.isBookSelected = false;
    },
  },
});

export const { selectBook, deselectBook } = bookSlice.actions;
export const { setSearchTerm } = bookSlice.actions;
export default bookSlice.reducer;
