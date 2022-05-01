import React, { useEffect, useState } from "react";
import "./card.scss";
import ReactAnimatedWeather from "react-animated-weather";

export default function Card() {
  const [icons, setIcons] = useState();
  
//http://dataservice.accuweather.com/forecasts/v1/daily/5day/318251?apikey=QQVXtQkqTfHcOphkeNFBmChFgdy6NjQQ&metric=true


  const data = [
    {
      Headline: {
        EffectiveDate: "2022-05-02T19:00:00+03:00",
        EffectiveEpochDate: 1651507200,
        Severity: 5,
        Text: "Expect showers Monday evening",
        Category: "rain",
        EndDate: "2022-05-03T01:00:00+03:00",
        EndEpochDate: 1651528800,
        MobileLink:
          "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?unit=c&lang=en-us",
      },
      DailyForecasts: [
        {
          Date: "2022-05-01T07:00:00+03:00",
          EpochDate: 1651377600,
          Temperature: {
            Minimum: {
              Value: 10,
              Unit: "C",
              UnitType: 17,
            },
            Maximum: {
              Value: 18.3,
              Unit: "C",
              UnitType: 17,
            },
          },
          Day: {
            Icon: 4,
            IconPhrase: "Intermittent clouds",
            HasPrecipitation: false,
          },
          Night: {
            Icon: 36,
            IconPhrase: "Intermittent clouds",
            HasPrecipitation: false,
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?day=1&unit=c&lang=en-us",
          Link: "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?day=1&unit=c&lang=en-us",
        },
        {
          Date: "2022-05-02T07:00:00+03:00",
          EpochDate: 1651464000,
          Temperature: {
            Minimum: {
              Value: 10.3,
              Unit: "C",
              UnitType: 17,
            },
            Maximum: {
              Value: 19.3,
              Unit: "C",
              UnitType: 17,
            },
          },
          Day: {
            Icon: 6,
            IconPhrase: "Mostly cloudy",
            HasPrecipitation: false,
          },
          Night: {
            Icon: 12,
            IconPhrase: "Showers",
            HasPrecipitation: true,
            PrecipitationType: "Rain",
            PrecipitationIntensity: "Moderate",
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?day=2&unit=c&lang=en-us",
          Link: "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?day=2&unit=c&lang=en-us",
        },
        {
          Date: "2022-05-03T07:00:00+03:00",
          EpochDate: 1651550400,
          Temperature: {
            Minimum: {
              Value: 10.4,
              Unit: "C",
              UnitType: 17,
            },
            Maximum: {
              Value: 15.1,
              Unit: "C",
              UnitType: 17,
            },
          },
          Day: {
            Icon: 18,
            IconPhrase: "Rain",
            HasPrecipitation: true,
            PrecipitationType: "Rain",
            PrecipitationIntensity: "Light",
          },
          Night: {
            Icon: 12,
            IconPhrase: "Showers",
            HasPrecipitation: true,
            PrecipitationType: "Rain",
            PrecipitationIntensity: "Light",
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?day=3&unit=c&lang=en-us",
          Link: "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?day=3&unit=c&lang=en-us",
        },
        {
          Date: "2022-05-04T07:00:00+03:00",
          EpochDate: 1651636800,
          Temperature: {
            Minimum: {
              Value: 7.4,
              Unit: "C",
              UnitType: 17,
            },
            Maximum: {
              Value: 17,
              Unit: "C",
              UnitType: 17,
            },
          },
          Day: {
            Icon: 4,
            IconPhrase: "Intermittent clouds",
            HasPrecipitation: false,
          },
          Night: {
            Icon: 38,
            IconPhrase: "Mostly cloudy",
            HasPrecipitation: false,
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?day=4&unit=c&lang=en-us",
          Link: "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?day=4&unit=c&lang=en-us",
        },
        {
          Date: "2022-05-05T07:00:00+03:00",
          EpochDate: 1651723200,
          Temperature: {
            Minimum: {
              Value: 8.6,
              Unit: "C",
              UnitType: 17,
            },
            Maximum: {
              Value: 20.1,
              Unit: "C",
              UnitType: 17,
            },
          },
          Day: {
            Icon: 4,
            IconPhrase: "Intermittent clouds",
            HasPrecipitation: false,
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false,
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?day=5&unit=c&lang=en-us",
          Link: "http://www.accuweather.com/en/tr/istanbul/318251/daily-weather-forecast/318251?day=5&unit=c&lang=en-us",
        },
      ],
    },
  ];

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
    console.log(data[0].Headline.Text);
    // console.log(data[0].Temperature.Metric.Value);
    ManageIcon(data[0].DailyForecasts[0]?.Day.Icon);
  }, []);
  return (
    <div className="ForecastDay">
      <div className="WeatherForecastDay">
        {ExtractDate(data[0].DailyForecasts[0]?.Date)}
      </div>
      <div className="WeatherForecastIcon">
        <ReactAnimatedWeather
          icon={icons && icons.icon}
          color={icons?.color}
          size={80}
        />
      </div>
      <div className="WeatherForecastTemp">
        <span className="WeatherForecastTemp-min">{data[0].DailyForecasts[0]?.Temperature?.Minimum.Value}° - {data[0].DailyForecasts[0]?.Temperature?.Maximum.Value}°</span>
      </div>

      <div className="WeatherForecastDescription">{data[0].Headline.Text}</div>
    </div>
  );
}
