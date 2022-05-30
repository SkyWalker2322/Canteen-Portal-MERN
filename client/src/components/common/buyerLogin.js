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

const Buyer_login = (props) => {
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
    password: password
  }
    localStorage.setItem('Email', email);

    axios
    .post("http://localhost:5000/buyer/login", Profile)
    .then(function(response){
      localStorage.setItem('Name',response.data.name);
      localStorage.setItem('Contact Number',response.data.contact_number);
      localStorage.setItem('Age',response.data.age);
      localStorage.setItem('Batch',response.data.batch_no);
      localStorage.setItem('Password',response.data.password);
      localStorage.setItem('ID',response.data._id)
      navigate("/buyerhome")
    })
    .catch(function(error){
      console.log(error);
    })

  };



  return (
    <Box>
      <Login_bar />
      <p></p>
      <Grid container align={"center"} spacing={2} >
      <Grid item xs={12}>
        <TextField
          label="Buyer's Email"
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
        <Button variant="contained" onClick={onSubmit} >
          Sign in
        </Button>
      </Grid>
      <Grid item xs={12}>
      <p>Not a Registered Buyer?</p>
      <Button variant="contained" onClick={() => navigate("/buyerreg")}> Register </Button>
      </Grid>
    </Grid>
    </Box>
  );
};

export default Buyer_login