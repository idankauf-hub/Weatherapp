import React, { useEffect, useState } from "react";
import "./todayCard.scss";
import ReactAnimatedWeather from "react-animated-weather";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const apiKey = "oS2dw2QHDL8hOYAZCUDCnrgWpJSt2GOc";

export default function TodayCard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { storeLocation, storeFavorite, storeKey, isFavorite, deleteFavorite } =
    bindActionCreators(actionCreators, dispatch);
  const [icons, setIcons] = useState({
    icon: "CLEAR_DAY",
    color: "goldenrod",
  });
  const [data, setData] = useState([
    {
      LocalObservationDateTime: "2022-05-02T14:48:00+03:00",
      EpochTime: 1651492080,
      WeatherText: "Mostly cloudy",
      WeatherIcon: 6,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 26.9,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 80.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      RealFeelTemperature: {
        Metric: {
          Value: 28.3,
          Unit: "C",
          UnitType: 17,
          Phrase: "Very Warm",
        },
        Imperial: {
          Value: 83.0,
          Unit: "F",
          UnitType: 18,
          Phrase: "Very Warm",
        },
      },
      RealFeelTemperatureShade: {
        Metric: {
          Value: 25.0,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
        Imperial: {
          Value: 77.0,
          Unit: "F",
          UnitType: 18,
          Phrase: "Pleasant",
        },
      },
      RelativeHumidity: 22,
      IndoorRelativeHumidity: 22,
      DewPoint: {
        Metric: {
          Value: 3.6,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 39.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Wind: {
        Direction: {
          Degrees: 90,
          Localized: "E",
          English: "E",
        },
        Speed: {
          Metric: {
            Value: 19.6,
            Unit: "km/h",
            UnitType: 7,
          },
          Imperial: {
            Value: 12.2,
            Unit: "mi/h",
            UnitType: 9,
          },
        },
      },
      WindGust: {
        Speed: {
          Metric: {
            Value: 33.3,
            Unit: "km/h",
            UnitType: 7,
          },
          Imperial: {
            Value: 20.7,
            Unit: "mi/h",
            UnitType: 9,
          },
        },
      },
      UVIndex: 6,
      UVIndexText: "High",
      Visibility: {
        Metric: {
          Value: 16.1,
          Unit: "km",
          UnitType: 6,
        },
        Imperial: {
          Value: 10.0,
          Unit: "mi",
          UnitType: 2,
        },
      },
      ObstructionsToVisibility: "",
      CloudCover: 78,
      Ceiling: {
        Metric: {
          Value: 6248.0,
          Unit: "m",
          UnitType: 5,
        },
        Imperial: {
          Value: 20500.0,
          Unit: "ft",
          UnitType: 0,
        },
      },
      Pressure: {
        Metric: {
          Value: 1013.0,
          Unit: "mb",
          UnitType: 14,
        },
        Imperial: {
          Value: 29.91,
          Unit: "inHg",
          UnitType: 12,
        },
      },
      PressureTendency: {
        LocalizedText: "Falling",
        Code: "F",
      },
      Past24HourTemperatureDeparture: {
        Metric: {
          Value: 3.6,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 7.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      ApparentTemperature: {
        Metric: {
          Value: 25.0,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 77.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      WindChillTemperature: {
        Metric: {
          Value: 26.7,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 80.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      WetBulbTemperature: {
        Metric: {
          Value: 14.0,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 57.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Precip1hr: {
        Metric: {
          Value: 0.0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: "in",
          UnitType: 1,
        },
      },
      PrecipitationSummary: {
        Precipitation: {
          Metric: {
            Value: 0.0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0.0,
            Unit: "in",
            UnitType: 1,
          },
        },
        PastHour: {
          Metric: {
            Value: 0.0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0.0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past3Hours: {
          Metric: {
            Value: 0.0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0.0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past6Hours: {
          Metric: {
            Value: 0.0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0.0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past9Hours: {
          Metric: {
            Value: 0.0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0.0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past12Hours: {
          Metric: {
            Value: 0.0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0.0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past18Hours: {
          Metric: {
            Value: 0.0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0.0,
            Unit: "in",
            UnitType: 1,
          },
        },
        Past24Hours: {
          Metric: {
            Value: 0.0,
            Unit: "mm",
            UnitType: 3,
          },
          Imperial: {
            Value: 0.0,
            Unit: "in",
            UnitType: 1,
          },
        },
      },
      TemperatureSummary: {
        Past6HourRange: {
          Minimum: {
            Metric: {
              Value: 16.9,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 62.0,
              Unit: "F",
              UnitType: 18,
            },
          },
          Maximum: {
            Metric: {
              Value: 26.9,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 80.0,
              Unit: "F",
              UnitType: 18,
            },
          },
        },
        Past12HourRange: {
          Minimum: {
            Metric: {
              Value: 12.8,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 55.0,
              Unit: "F",
              UnitType: 18,
            },
          },
          Maximum: {
            Metric: {
              Value: 26.9,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 80.0,
              Unit: "F",
              UnitType: 18,
            },
          },
        },
        Past24HourRange: {
          Minimum: {
            Metric: {
              Value: 12.8,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 55.0,
              Unit: "F",
              UnitType: 18,
            },
          },
          Maximum: {
            Metric: {
              Value: 26.9,
              Unit: "C",
              UnitType: 17,
            },
            Imperial: {
              Value: 80.0,
              Unit: "F",
              UnitType: 18,
            },
          },
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us",
      Link: "http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us",
    },
  ]);

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
          const location = res.data;
          setData(location);
          ManageIcon(location[0].WeatherIcon);
        });
    }
  };

  const ExtractDate = (value) => {
    let currentDate = new Date(value);
    let res = currentDate.getDate() + "/" + (currentDate.getMonth() + 1);
    return res;
  };
  const setFavorite = () => {
    isFavorite(true);
    storeFavorite({
      cityKey: state.location.cityKey,
      cityName: state.location.name,
    });
    console.log(state.location);
  };
  const removeFavorite = () => {
    isFavorite(false);
    const filteredItems = state.location.favoriteLocations.filter((item) => item.cityKey !== state.location.cityKey);
    deleteFavorite(filteredItems);
  };
  const checkFavorite=()=>{
    let res = state.location.favoriteLocations.find(location => location.cityKey === state.location.cityKey);
    if(res)
      isFavorite(true);
   else
    isFavorite(false);
  };

  useEffect(() => {
    checkFavorite();
  }, [state.location.isFavorite]);
  useEffect(() => {
    getLocation();
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
            alignItems: "center",
            display: "flex",
          }}
        >
          {state.location.isFavorite ? (
            <FavoriteIcon fontSize={"large"} onClick={removeFavorite} />
          ) : (
            <FavoriteBorderIcon fontSize={"large"} onClick={setFavorite} />
          )}
        </div>
      </div>
    );
  } else {
    return <div>loader...</div>;
  }
}
