import React from "react";
import "./card.scss";
import ReactAnimatedWeather from "react-animated-weather";

export default function Card() {
    const defaults = {
        icon: 'CLEAR_DAY',
        color: 'goldenrod',
        size: 80,
        animate: true
      };
  return (
    <div className="ForecastDay">
    <div className="WeatherForecastDay">{"Sat"}</div>
    <div className="WeatherForecastIcon">
    <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
          
        />    </div>
    <div className="WeatherForecastTemp">
      <span className="WeatherForecastTemp-min">{13}</span>🌡
      <span className="WeatherForecastTemp-max">{14}</span>
    </div>

    <div className="WeatherForecastDescription">
      {"sdsd"}
    </div>
  </div>
  );
}
