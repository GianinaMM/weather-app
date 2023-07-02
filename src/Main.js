import { useState, useEffect } from "react";
import classes from "./Main.module.scss";
import axios from "axios";

const Main = ({ value }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchWeather();
  }, [value]);

  console.log(value);

  async function fetchWeather() {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: "45d7ac973dc2498f84b170001233006",
          q: value,
          days: 5,
          hour: 14,
        },
      }
    );
    setData((prevState) => {
      return (prevState = response.data);
    });
  }
  console.log(data);
  const style = {
    fontWeight: "bold",
  };

  return (
    <>
      <div className={`${classes.main}`}></div>
      <div className={`${classes.container}`}>
        <div className={`${classes.pContainer}`}>
          <div className={`${classes.text}`}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "larger",
                marginLeft: "5px",
              }}
            >
              {data.location && data.location.name}
            </p>
            <p style={{ marginLeft: "5px" }}>
              Today temperature is
              <span style={{ fontWeight: "bold", padding: "3px" }}>
                {data.current && data.current.temp_c}
                °C{" "}
              </span>
              and feels like
              <span style={{ fontWeight: "bold", padding: "3px" }}>
                {data.current && data.current.feelslike_c}
                °C{" "}
              </span>
            </p>
          </div>
          <div className={`${classes.text}`}>
            <p>
              The wind speed is:
              <span style={{ fontWeight: "bold", padding: "3px" }}>
                {data.current && data.current.gust_kph}
              </span>
              km/h
            </p>
            <p>
              Atmospheric pressure:
              <span style={{ fontWeight: "bold", padding: "4px" }}>
                {data.current && data.current.pressure_in}
              </span>
              and humidity:
              <span style={{ fontWeight: "bold", padding: "3px" }}>
                {data.current && data.current.humidity}
              </span>
            </p>
            <p>
              Chance of rain:
              <span style={{ fontWeight: "bold", padding: "3px" }}>
                {data.forecast &&
                  data.forecast.forecastday[0].day.daily_chance_of_rain}
              </span>
              %
            </p>
          </div>
        </div>
        <div className={`${classes.wrapper}`}>
          {data.forecast &&
            data.forecast.forecastday.map((day, index) => {
              return (
                <div className={`${classes.box}`} key={index}>
                  {day.date}
                  <img src={day.day.condition.icon}></img>
                  <div>{day.day.maxtemp_c}°C</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Main;
