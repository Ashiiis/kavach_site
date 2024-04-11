import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer'; // Importing the default export

const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export default store;
