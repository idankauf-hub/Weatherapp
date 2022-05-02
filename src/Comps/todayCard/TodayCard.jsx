import React, { useEffect, useState } from "react";
import "./todayCard.scss";
import ReactAnimatedWeather from "react-animated-weather";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const apiKey = "7UDoiGRdglFmoIqh7Y1eueFaSlscl787";

export default function TodayCard() {
  const state = useSelector((state) => state);
  console.log(state)
  const dispatch = useDispatch();
  const { storeLocation, storeFavorite, storeKey,isFavorite } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [icons, setIcons] = useState({
    icon: "CLEAR_DAY",
    color: "goldenrod",
  });
  const [data, setData] = useState();

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

  const getLocation = () => {
    if (state.location.cityKey != "") {
      axios
        .get(
          `http://dataservice.accuweather.com/currentconditions/v1/${state.location.cityKey}?apikey=${apiKey}&language=en-us&details=true`
        )
        .then((res) => {
          console.log(res)
          const location = res.data;
          setData(location);
          ManageIcon(location[0].WeatherIcon);
          // storeLocation(location[0].LocalizedName)
          // storeKey(location[0].Key)
          //setLocation({ persons });
        });
    }
  };

  const ExtractDate = (value) => {
    let currentDate = new Date(value);
    let res = currentDate.getDate() + "/" + (currentDate.getMonth() + 1);
    return res;
  };
  const setFavorite = () => {
    storeFavorite({cityKey:state.location.cityKey,cityName:state.location.name})
    console.log(state)
    // let currentDate = new Date(value);
    // let res = currentDate.getDate() + "/" + (currentDate.getMonth() + 1);
    // return res;
  };

  useEffect(() => {
    getLocation();
    // if(data){ManageIcon(data[0].WeatherIcon)}
  }, []);

  useEffect(() => {
    getLocation();
    if (data) {
      ManageIcon(data[0].WeatherIcon);
    }
  }, [state.location.cityKey]);

  if (data) {
    return (
      <div className="ForecastToday">
        <div className="left">
          <div className="WeatherForecastIcon">
            <ReactAnimatedWeather
              icon={icons && icons.icon}
              color={icons?.color}
              size={240}
            />
          </div>
        </div>
        <div className="right">
          <div className="WeatherForecastDay">
            {ExtractDate(data[0]?.LocalObservationDateTime)}
          </div>
          <div className="WeatherForecastDay">{state.location.name}</div>

          <div className="WeatherForecastTemp">
            <span>{data[0].Temperature.Metric.Value}🌡</span>
          </div>

          <div className="WeatherForecastDescription">
            {data[0].WeatherText}
          </div>
        </div>
        <div
          style={{
            textAlign: "right",
            justifyContent: "center",
            alignItems:"center",
            display:"flex"
          }}
        >
          <FavoriteIcon fontSize={"large"} onClick={setFavorite}/>
        </div>
      </div>
    );
  } else {
    return <div>loader...</div>;
  }
}
