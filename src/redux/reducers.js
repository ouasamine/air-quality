/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as idGenerator } from 'uuid';
import { getCityCoord, getCityIndex } from '../api/apiCalls';

const GET_DATA = 'airquality/getindex';
const getCitiesData = createAsyncThunk(
  GET_DATA,
  async (_, thunkAPI) => {
    const calls = [];
    const { cities } = thunkAPI.getState();
    cities.forEach((city) => {
      calls.push(
        getCityCoord(city).then(async (cityCoord) => {
          const { lat } = cityCoord[0];
          const long = cityCoord[0].lon;
          const cityData = await getCityIndex(lat, long);
          return { id: idGenerator(), city, data: cityData.list[0] };
        }),
      );
    });
    const citiesData = await Promise.all(calls).then((res) => res);
    return citiesData;
  },
);

const initialState = {
  cities: [
    'Casablanca',
    'Rabat',
    'Fes',
    'Meknes',
    'Marrakesh',
    'Agadir',
    'Oujda',
    'Tangier',
    'Temara',
    'Salé',
    'Asfi',
    'Mohammedia',
    'Khouribga',
    'Safi',
  ],
  citiesData: [],
};

const handleIndexesSlice = createSlice({
  name: 'handleIndexes',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCitiesData.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.citiesData = action.payload;
    });
  },
});

export default handleIndexesSlice.reducer;
export const { getIndexes } = handleIndexesSlice.actions;
export { getCitiesData };
