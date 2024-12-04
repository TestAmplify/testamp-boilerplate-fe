import { Country } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCountries = async () => {
  const response = await axios.get<Country[]>(
    "https://restcountries.com/v3.1/all"
  );
  return response.data
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
    .map((country) => ({
      value: country.name.common,
      label: country.name.common,
      flag: country.flag,
      timeZones: `${country.name.common} (${country.timezones})`,
    }));
};

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    staleTime: Infinity,
  });
};
