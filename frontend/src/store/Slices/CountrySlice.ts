import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import type { Country } from '../../types/country';

interface CountryState {
  countries: Country[];
  filteredCountries: Country[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: CountryState = {
  countries: [],
  filteredCountries: [],
  status: 'idle',
  error: null,
  currentPage: 1,
  itemsPerPage: 10,
};

export const fetchCountries = createAsyncThunk('country/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
  return response.data as Country[];
});

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    filterByRegion: (state, action: PayloadAction<string>) => {
      if (action.payload === 'All') {
        state.filteredCountries = state.countries;
      } else {
        state.filteredCountries = state.countries.filter(
          (country) => country.region === action.payload
        );
      }
      state.currentPage = 1;
    },
    loadMore: (state) => {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<Country[]>) => {
        state.status = 'succeeded';
        state.countries = action.payload;
        state.filteredCountries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch countries';
      });
  },
});

export const { filterByRegion, loadMore } = countrySlice.actions;
export default countrySlice.reducer;