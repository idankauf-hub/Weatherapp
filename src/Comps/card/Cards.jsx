import React from "react";
import "./card.scss";
import Card from "./Card";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
const apiKey = "QQVXtQkqTfHcOphkeNFBmChFgdy6NjQQ";

export default function Cards() {
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  console.log(state);
  const [data, setData] = useState([
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
  ]);

  const getLocation = () => {
    if (state.location.cityKey != "") {
      axios
        .get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${state.location.cityKey}?apikey=${apiKey}&metric=true`
        )
        .then((res) => {
          const location = res.data;
          console.log(location[0]);
          setData(location);
          setLoading(true);
          // storeLocation(location[0].LocalizedName)
          // storeKey(location[0].Key)
          //setLocation({ persons });
          //console.log(location)
        });
    }
  };

  useEffect(() => {
    getLocation();

  }, []);

  useEffect(() => {
    getLocation();
  }, [state.location.cityKey]);

  return (
    <div className="Cards">
      {data &&
        data?.DailyForecasts?.map((e, index) => {
          return <Card key={index} data={e} />;
        })}
    </div>
  );
}
