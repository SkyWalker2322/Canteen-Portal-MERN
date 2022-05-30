import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

const Buyer_Navbar = () => {
    const navigate = useNavigate();

    const onClickLogOut = () => {
        localStorage.clear();
        navigate("/buyerlogin")
    };

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/buyerhome")}
          >
            Canteen Portal - Buyer Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/buyerfav")}>
            My Favorites
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyerprofile")}>
            My Profile
          </Button>
          <Button color="inherit" onClick={onClickLogOut}>
            Log out
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Buyer_Navbar;