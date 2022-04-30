import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const Navbar = () => {
  //const { dispatch } = useContext(DarkModeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <HomeIcon />{" "}
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Herolo Weather Task
          </Typography>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit" sx={{ mr: 3, borderRadius: 20 }}>
              Home
            </Button>
          </Link>
          <Link
            to="/favorite"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit" sx={{ mr: 3, borderRadius: 20 }}>
              Favorite
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
