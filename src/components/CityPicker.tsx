import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
import { Country, City } from "country-state-city";

import { FaGlobeAmericas } from "react-icons/fa";
import { CityOption, CountryOption } from "../utils/typings";

const CityPicker = () => {
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption>(null);

  const isDisabled = !selectedCountry;

  const handleSelectedCountry = (searchData: CountryOption) => {
    setSelectedCountry(searchData);
    setSelectedCity(null);
  };

  const handleSelectedCity = (searchData: CityOption | null) => {
    setSelectedCity(searchData);
    if (searchData) {
      navigate(
        `/location/${searchData.value.name}/${searchData.value.latitude}/${searchData.value.longitude}`
      );
    }
  };

  const options = Country.getAllCountries().map((country) => ({
    value: {
      latitude: country.latitude,
      longitude: country.longitude,
      isoCode: country.isoCode,
    },
    label: country.name,
  }));

  const cityOptions = selectedCountry
    ? City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map((city) => ({
        value: {
          latitude: city.latitude!,
          longitude: city.longitude!,
          countryCode: city.countryCode,
          name: city.name,
          stateCode: city.stateCode,
        },
        label: city.name,
      }))
    : undefined;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <FaGlobeAmericas className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
          placeholder="Select Country"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <FaGlobeAmericas className="h-5 w-5 text-white" />
          <label htmlFor="city">City</label>
        </div>
        <Select
          isDisabled={isDisabled}
          className="text-black"
          placeholder="Select City"
          value={selectedCity}
          onChange={handleSelectedCity}
          options={cityOptions}
        />
      </div>
    </div>
  );
};

export default CityPicker;
