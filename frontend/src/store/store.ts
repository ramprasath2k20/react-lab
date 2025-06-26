import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import countryReducer from './Slices/CountrySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    country: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;