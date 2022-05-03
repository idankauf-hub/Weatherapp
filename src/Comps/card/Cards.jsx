import React from "react";
import "./card.scss";
import Card from "./Card";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
const apiKey = "oS2dw2QHDL8hOYAZCUDCnrgWpJSt2GOc";

export default function Cards() {
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getLocation = () => {
    if (state.location.cityKey != "") {
      axios
        .get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${state.location.cityKey}?apikey=${apiKey}&metric=true`
        )
        .then((res) => {
          const location = res.data;
          setData(location);
          setLoading(true);
          // storeLocation(location[0].LocalizedName)
          // storeKey(location[0].Key)
          //setLocation({ persons });
        });
    }
  };

  useEffect(() => {
   // getLocation();

  }, []);

  useEffect(() => {
   // getLocation();
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
