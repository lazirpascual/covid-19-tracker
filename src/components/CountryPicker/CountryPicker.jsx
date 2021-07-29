import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      setFetchedCountries(await fetchCountries());
    };

    getAllCountries();
  }, [fetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
