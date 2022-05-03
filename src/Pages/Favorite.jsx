import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import "../Comps/card/card.scss";
import Card from "../Comps/card/Card";
import axios from "axios";
const apiKey = "gW5QmxlArGWpmdT9vPd1rEW6qQyAwyJH";

export default function Favorite() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { storeLocation, storeFavorite, storeKey, isFavorite } =
    bindActionCreators(actionCreators, dispatch);

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  console.log(state);

  const getLocation = async (cityKeys) => {
    try {
      const results = await Promise.all(
        cityKeys.map(({ cityKey }) => {
          return axios.get(
            `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}&language=en-us&details=true`
          );
        })
      );
      setData(results.map((result) => result.data[0]));
      console.log(data)
    } catch (err) {
      console.log(err.response.message);
    }
  };
  const selectCity = (cityKey, cityName) => {
    storeLocation(cityName);
    storeKey(cityKey);
    navigate("/");
  };
  useEffect(() => {
    getLocation(state.location.favoriteLocations);
    console.log(state);
  }, []);
  return (
    <div className="Cards">
      {data &&
        data?.map((weather, index) => {
          return (
            <div
              style={{ marginRight: "1%" }}
              onClick={() =>
                selectCity(
                  state.location.favoriteLocations[index].cityKey,
                  state.location.favoriteLocations[index].cityName
                )
              }
            >
              <Card
                key={index}
                data={{
                  Day: { Icon: weather.WeatherIcon },
                  Temperature: {
                    Minimum: {
                      Value:
                        weather.TemperatureSummary.Past6HourRange.Minimum.Metric
                          .Value,
                    },
                    Maximum: {
                      Value:
                        weather.TemperatureSummary.Past6HourRange.Maximum.Metric
                          .Value,
                    },
                  },
                  Date: weather.LocalObservationDateTime,
                  cityName: state.location.favoriteLocations[index].cityName,
                }}
              />
            </div>
          );
        })}
    </div>
  );
}
