import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import coronaImage from "./images/image.png";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState({});

  useEffect(() => {
    const getData = async (params) => {
      setData(await fetchData());
    };

    getData();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    setData(fetchedData);
    setCountry(country);
    console.log(fetchedData);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="Covid-19 Logo" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
