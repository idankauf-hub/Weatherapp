import React, { useEffect, useState } from "react";
import "./card.scss";
import ReactAnimatedWeather from "react-animated-weather";

export default function Card(props) {
  const [icons, setIcons] = useState();
  const [data, setData] = useState(props.data);
  console.log(data)
  const ManageIcon = (iconNum) => {
    if ((iconNum >= 1 && iconNum <= 5) || iconNum == 30)
      setIcons((prevState) => ({
        ...prevState,
        icon: "CLEAR_DAY",
        color: "goldenrod",
      }));
    if ((iconNum >= 6 && iconNum <= 8) || (iconNum >= 35 && iconNum <= 38))
      setIcons((prevState) => ({
        ...prevState,
        icon: "CLOUDY",
        color: "gray",
      }));
    if (iconNum == 11)
      setIcons((prevState) => ({
        ...prevState,
        icon: "FOG",
        color: "gray",
      }));
    if ((iconNum >= 12 && iconNum <= 18) || (iconNum >= 39 && iconNum <= 43))
      setIcons((prevState) => ({
        ...prevState,
        icon: "RAIN",
        color: "gray",
      }));
    if (iconNum >= 19 && iconNum <= 21)
      setIcons((prevState) => ({
        ...prevState,
        icon: "PARTLY_CLOUDY_DAY",
        color: "goldenrod",
      }));
    if ((iconNum >= 22 && iconNum <= 24) || iconNum == 31 || iconNum == 44)
      setIcons((prevState) => ({
        ...prevState,
        icon: "SNOW",
        color: "white",
      }));
    if (iconNum >= 25 && iconNum <= 29)
      setIcons((prevState) => ({
        ...prevState,
        icon: "SLEET",
        color: "gray",
      }));
    if (iconNum >= 32 && iconNum <= 34)
      setIcons((prevState) => ({
        ...prevState,
        icon: "CLEAR_NIGHT",
        color: "black",
      }));
  };

  const ExtractDate = (value) => {
    let currentDate = new Date(value);
    let res = currentDate.getDate() + "/" + (currentDate.getMonth() + 1);
    return res;
  };

  useEffect(() => {
    setData(props.data)
    ManageIcon(props.data.Day.Icon);
  }, [props]);
  return (
    <div className="ForecastDay">
      <div className="WeatherForecastDay">
        {ExtractDate(data?.Date)}
        {data.cityName && <h4>{data.cityName}</h4>}
      </div>
      <div className="WeatherForecastIcon">
        <ReactAnimatedWeather
          icon={icons && icons.icon}
          color={icons?.color}
          size={80}
        />
      </div>
      <div className="WeatherForecastTemp">
        <span className="WeatherForecastTemp-min">
          {data?.Temperature?.Minimum?.Value}° -{" "}
          {data?.Temperature?.Maximum?.Value}°
        </span>
      </div>

      <div className="WeatherForecastDescription">{data?.Day?.IconPhrase}</div>
    </div>
  );
}
