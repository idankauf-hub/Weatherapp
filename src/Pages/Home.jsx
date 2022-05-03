import TodayCard from "../Comps/todayCard/TodayCard";
import "./home.scss";
import Card from "../Comps/card/Card.jsx";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import Cards from "../Comps/card/Cards";
import { ToastContainer, toast } from "react-toastify";
import BasicModal from "../Comps/basicModal/BasicModal";

const apiKey = "oS2dw2QHDL8hOYAZCUDCnrgWpJSt2GOc";

export default function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { storeLocation, storeFavorite, storeKey,isFavorite } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [city, setCity] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [data, setData] = useState(["Enter"]);

  // const data = [
  //   {
  //     Version: 1,
  //     Key: "215854",
  //     Type: "City",
  //     Rank: 31,
  //     LocalizedName: "Tel Aviv",
  //     Country: {
  //       ID: "IL",
  //       LocalizedName: "Israel",
  //     },
  //     AdministrativeArea: {
  //       ID: "TA",
  //       LocalizedName: "Tel Aviv",
  //     },
  //   },
  //   {
  //     Version: 1,
  //     Key: "3431644",
  //     Type: "City",
  //     Rank: 45,
  //     LocalizedName: "Telanaipura",
  //     Country: {
  //       ID: "ID",
  //       LocalizedName: "Indonesia",
  //     },
  //     AdministrativeArea: {
  //       ID: "JA",
  //       LocalizedName: "Jambi",
  //     },
  //   },
  //   {
  //     Version: 1,
  //     Key: "300558",
  //     Type: "City",
  //     Rank: 45,
  //     LocalizedName: "Telok Blangah New Town",
  //     Country: {
  //       ID: "SG",
  //       LocalizedName: "Singapore",
  //     },
  //     AdministrativeArea: {
  //       ID: "05",
  //       LocalizedName: "South West",
  //     },
  //   },
  //   {
  //     Version: 1,
  //     Key: "325876",
  //     Type: "City",
  //     Rank: 51,
  //     LocalizedName: "Telford",
  //     Country: {
  //       ID: "GB",
  //       LocalizedName: "United Kingdom",
  //     },
  //     AdministrativeArea: {
  //       ID: "TFW",
  //       LocalizedName: "Telford and Wrekin",
  //     },
  //   },
  //   {
  //     Version: 1,
  //     Key: "169072",
  //     Type: "City",
  //     Rank: 51,
  //     LocalizedName: "Telavi",
  //     Country: {
  //       ID: "GE",
  //       LocalizedName: "Georgia",
  //     },
  //     AdministrativeArea: {
  //       ID: "KA",
  //       LocalizedName: "Kakheti",
  //     },
  //   },
  //   {
  //     Version: 1,
  //     Key: "230611",
  //     Type: "City",
  //     Rank: 51,
  //     LocalizedName: "Telsiai",
  //     Country: {
  //       ID: "LT",
  //       LocalizedName: "Lithuania",
  //     },
  //     AdministrativeArea: {
  //       ID: "TE",
  //       LocalizedName: "Telšiai",
  //     },
  //   },
  //   {
  //     Version: 1,
  //     Key: "2723742",
  //     Type: "City",
  //     Rank: 55,
  //     LocalizedName: "Telégrafo",
  //     Country: {
  //       ID: "BR",
  //       LocalizedName: "Brazil",
  //     },
  //     AdministrativeArea: {
  //       ID: "PA",
  //       LocalizedName: "Pará",
  //     },
  //   },
  //   {
  //     Version: 1,
  //     Key: "186933",
  //     Type: "City",
  //     Rank: 55,
  //     LocalizedName: "Tela",
  //     Country: {
  //       ID: "HN",
  //       LocalizedName: "Honduras",
  //     },
  //     AdministrativeArea: {
  //       ID: "AT",
  //       LocalizedName: "Atlántida",
  //     },
  //   },
  //   {
  //     Version: 1,
  //     Key: "3453754",
  //     Type: "City",
  //     Rank: 55,
  //     LocalizedName: "Telaga Asih",
  //     Country: {
  //       ID: "ID",
  //       LocalizedName: "Indonesia",
  //     },
  //     AdministrativeArea: {
  //       ID: "JB",
  //       LocalizedName: "West Java",
  //     },
  //   },
  //   {
  //     Version: 1,
  //     Key: "3453755",
  //     Type: "City",
  //     Rank: 55,
  //     LocalizedName: "Telagamurni",
  //     Country: {
  //       ID: "ID",
  //       LocalizedName: "Indonesia",
  //     },
  //     AdministrativeArea: {
  //       ID: "JB",
  //       LocalizedName: "West Java",
  //     },
  //   },
  // ];

  const handleSubmit = () => {
    if (!/^[a-zA-Z]+$/.test(inputValue) || inputValue === '') {
      setError(true);
      setErrorText("Only English Letters")
    } else {
      setError(false);
      getLocation();
    }
    // AutoInput(inputValue);
  };

  const getLocation = () => {
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${inputValue}&language=en-us`
      )
      .then((res) => {
        const location = res.data;
        console.log(location.length);
        if(location.length>0){
          storeLocation(location[0].LocalizedName);
          storeKey(location[0].Key);
        }
        else{
          setError(true)
          setErrorText("There is no city as you asked for,try again")
        }

      });
  };

  const AutoInput = (value) => {
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${value}&language=en-us`)
    .then(res => {
      const location = res.data;
      console.log(location)
      setData(location)
    })
  };
  return (
    <div className="home">
      <div className="input">
        <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={data?data?.map((city1) => city1.LocalizedName):[]}
          onChange={(event, newValue) => {
            //setLocation(newValue?.LocalizedName);
            console.log(city);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            AutoInput(newInputValue);
          }}
          getOptionLabel={(option) => option || ""}
          isOptionEqualToValue={(option, value) =>
            option.LocalizedName === value.LocalizedName
          }
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              id="outlined-basic"
              variant="outlined"
              label="Search"
              sx={{
                backgroundColor: "white",
                borderBlock: "black",
                width: 380,
              }}
            />
          )}
        />

        <IconButton color="secondary" size="small" onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="Cards">
        <TodayCard />
      </div>
      <Cards />
      {error && <BasicModal text={errorText}/>}
    </div>
  );
}
