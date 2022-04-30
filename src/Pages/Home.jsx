import React from "react";
import Navbar from "../Comps/navbar/Navbar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from '@mui/material/IconButton';

import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";

import "./home.scss";
import Card from '../Comps/card/Card.jsx'
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="input">
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search"
          sx={{ backgroundColor:"white",borderBlock:"black" ,width:380}}
        />
      <IconButton color="secondary" size="small">
        <SearchIcon/>
      </IconButton>
      </div>
      <Card/>
    </div>
  );
}
