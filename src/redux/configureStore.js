import { configureStore } from '@reduxjs/toolkit';
import handleIndexes from './reducers';

const store = configureStore({
  reducer: handleIndexes,
});

export default store;
