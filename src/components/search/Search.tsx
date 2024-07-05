import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../utils/api";
import { City, CityOption } from "../../utils/typings";

interface SearchProps {
  onSearchChange: (searchData: { value: string; label: string }) => void;
}



const Search = ({ onSearchChange }: SearchProps) => {
  const [search, setSearch] = useState<CityOption | null>(null);

  const handleOnChange = (searchData: CityOption | null) => {
    setSearch(searchData);
    onSearchChange(searchData!);
  };

  const loadOptions = async (inputValue: string) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const responseData = await response.json();
      const options = responseData.data.map(
        (city: City): CityOption => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })
      );
      return { options };
    } catch (error) {
      console.error(error);
      return { options: [] };
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
