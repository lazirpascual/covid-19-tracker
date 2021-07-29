import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

const App = () => {
  const [covidData, setData] = useState({});
  const [country, setCountry] = useState({});

  useEffect(() => {
    const getData = async (params) => {
      setData(await fetchData());
    };

    getData();
  }, []);

  const handleCountryChange = (country) => {
    console.log(country);
  };

  return (
    <div className={styles.container}>
      <Cards data={covidData} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart />
    </div>
  );
};

export default App;
