export interface Country {
    name: string;
    region: string;
    flag: string;
  }
  
  export interface CountryState {
    countries: Country[];
    currentPage: number;
    loading: boolean;
    error: string | null;
    hasMore: boolean;
  }