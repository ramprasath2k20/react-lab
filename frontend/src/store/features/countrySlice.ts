import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCountries } from '../../lib/api/countries';
import type { CountryState } from '../../types/country';

const initialState: CountryState = {
  countries: [],
  currentPage: 1,
  loading: false,
  error: null,
  hasMore: true,
};

export const loadCountries = createAsyncThunk(
  'countries/loadCountries',
  async (page: number, { rejectWithValue }) => {
    try {
      return await fetchCountries(page);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage += 1;
    },
    resetCountries: (state) => {
      state.countries = [];
      state.currentPage = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = [...state.countries, ...action.payload];
        state.hasMore = action.payload.length > 0;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { incrementPage, resetCountries } = countrySlice.actions;
export default countrySlice.reducer;