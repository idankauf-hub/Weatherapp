import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Comps/card/card.scss";
import Card from "../Comps/card/Card";
import axios from "axios";
const apiKey = "7UDoiGRdglFmoIqh7Y1eueFaSlscl787";

export default function Favorite() {
  const state = useSelector((state) => state);
  const [data, setData] = useState([]);

  console.log(state);

  const getLocation = async (cityKeys) => {
    const results = await Promise.all(
      cityKeys.map(({cityKey}) => {
        return axios.get(
          `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}&language=en-us&details=true`
        );
      })
    );
    console.log(results);
    setData(results.map((result) => result.data[0]));
  };
  useEffect(() => {
    getLocation(state.location.favoriteLocations);
  }, []);
  return (
    <div className="Cards">
      {data &&
        data?.map((weather, index) => {
          return (
            <Card
              
              key={index}
              data={{
                Day: { Icon: weather.WeatherIcon },
                Temperature: {
                  Minimum: { Value: weather.TemperatureSummary.Past6HourRange.Minimum.Metric.Value },
                  Maximum: { Value: weather.TemperatureSummary.Past6HourRange.Maximum.Metric.Value },
                },
                Date:weather.LocalObservationDateTime,
                cityName:state.location.favoriteLocations[index].cityName
              }}
            />
          );
        })}
    </div>
  );
}
