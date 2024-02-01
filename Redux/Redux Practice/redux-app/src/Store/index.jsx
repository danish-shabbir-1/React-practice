import { configureStore } from "@reduxjs/toolkit";
import  themeSlice  from './themeReducer'

const store = configureStore({
  reducer: themeSlice.reducer,
});

export default store;
