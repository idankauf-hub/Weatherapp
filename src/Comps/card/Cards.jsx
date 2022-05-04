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
  const [data, setData] = useState([]);

  const getLocation = () => {
    if (state.location.cityKey != "") {
      try {
        axios
          .get(
            `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${state.location.cityKey}?apikey=${apiKey}&metric=true`
          )
          .then((res) => {
            const location = res.data;
            setData(location);
            setLoading(true);
          });
      } catch (err) {
        console.log(err.response.message);
      }
    }
  };

  useEffect(() => {
     getLocation();
  }, []);

  useEffect(() => {
     getLocation();
  }, [state.location.cityKey]);

  return (
    <div className="Cards1">
      {data &&
        data?.DailyForecasts?.map((e, index) => {
          return <Card key={index} data={e} />;
        })}
    </div>
  );
}
