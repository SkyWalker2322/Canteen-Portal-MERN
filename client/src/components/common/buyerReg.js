import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import React from "react";

const Buyer_register = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [contact_no, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [batch, setBatch] = useState("");
  const [date, setDate] = useState(null);

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeContact = (event) => {
    setContact(event.target.value);
  };

  const onChangeBatch = (event) => {
    setBatch(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setAge("");
    setBatch("");
    setContact("");
    setPassword("");
    setDate(null);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newbuyerUser = {
      name: name,
      email: email,
      age: age,
      batch: batch,
      password: password,
      contact_no: contact_no,
      date: Date.now(),
    };

    axios
      .post("http://localhost:5000/buyer/register", newbuyerUser)
      .then((response) => {
        alert("Succesfully created\t" + response.data.name);
        console.log(response.data);
        navigate("/buyerlogin")
      });

    resetInputs();
  };

  return (
    <Grid container align={"center"} spacing={2} >
      <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChangeUsername}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
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
          onChange={onChangePassword}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Age"
          variant="outlined"
          value={age}
          onChange={onChangeAge}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contact Number"
          variant="outlined"
          value={contact_no}
          onChange={onChangeContact}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Batch Name"
          variant="outlined"
          value={batch}
          onChange={onChangeBatch}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

export default Buyer_register;
