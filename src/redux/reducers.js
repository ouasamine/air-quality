import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coords: [],
};
const handleIndexesSlice = createSlice({
  name: "handleIndexes",
  initialState,
  reducers: {
    getIndexes() {

    },
  }
});

export default handleIndexesSlice.reducer;
export const { getIndexes } = handleIndexesSlice.actions;
