import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

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

    if (country === "global") {
      country = null;
    }
    setData(fetchedData);
    setCountry(country);
    console.log(fetchedData);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
