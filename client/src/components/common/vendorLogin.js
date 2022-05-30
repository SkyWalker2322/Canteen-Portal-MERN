import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React from "react";

const Login_bar = () => {
  const navigate = useNavigate();

  return (
    <Box alignContent={"center"}>
      <AppBar position="static" >
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/buyerlogin")}>
            Buyers
          </Button>
          <Button color="inherit" onClick={() => navigate("/vendorlogin")}>
            Vendors
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const Vendor_login = (props) =>{
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

  const Profile = {
    email: email,
    password: password }
    localStorage.setItem('Email', email);
    axios
    .post("http://localhost:4000/vendor/login", Profile)
    .then(function(response){
      localStorage.setItem('Man_name',response.data.man_name);
      localStorage.setItem('Shop_name',response.data.shop_name);
      localStorage.setItem('Open_time',response.data.open_time);
      localStorage.setItem('Contact Number',response.data.contact_number);
      localStorage.setItem('Password',response.data.password);
      localStorage.setItem('Close_time',response.data.close_time);

      navigate("/vendorhome")
    })
    .catch(function(error){
      console.log(error);
    })

  };

return(
  <Box>
      <Login_bar />
      <p></p>
      <Grid container align={"center"} spacing={2} >
      <Grid item xs={12}>
        <TextField
          label="Vendor's Email"
          variant="outlined"
          value={email}
          onChange={onChangeEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          type={"password"}
          onChange={onChangePassword}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Sign in
        </Button>
      </Grid>
      <Grid item xs={12}>
      <p>Not a Registered Vendor?</p>
      <Button variant="contained" onClick={() => navigate("/vendorreg")}> Register </Button>
      </Grid>
    </Grid>
    </Box>
);
};

export default Vendor_login