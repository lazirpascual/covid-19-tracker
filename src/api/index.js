import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const data = await axios.get(
      "https://api.covidtracking.com/v1/us/daily.json"
    );

    console.log(data);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.positive,
      deaths: dailyData.death,
      date: dailyData.date,
    }));

    return data;
  } catch (error) {}
};

export const fetchCountries = async (params) => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
