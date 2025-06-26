import type { Country } from "../../types/country";

const baseurl='https://restcountries.com/v2'

export const fetchCountries = async (page: number, limit: number = 10): Promise<Country[]> => {
    const response = await fetch(`${baseurl}/all?fields=name,region,flag`);
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    const data = await response.json();
    // Client-side pagination since API doesn't support it
    const startIndex = (page - 1) * limit;
    return data.slice(startIndex, startIndex + limit);
  };
  