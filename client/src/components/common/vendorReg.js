import { useState } from "react"
import axios from "axios"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import React from "react";


const Vendor_register = (props) => {
  const navigate = useNavigate();

    const [man_name, setManName] = useState("")
    const [shop_name, setShopName] = useState("")
    const [email, setEmail] = useState("")
    const [open_time, setOpenTime] = useState("")
    const [contact_number, setContact] = useState("")
    const [password, setPassword] = useState("")
    const [close_time, setCloseTime] = useState("")
    const [date, setDate] = useState(null)

    const onChangeManname = (event) => {
      setManName(event.target.value)
    };
    const onChangeShopName = (event) => {
        setShopName(event.target.value)
    }
  
    const onChangeEmail = (event) => {
      setEmail(event.target.value)
    };
  
    const onChangePassword = (event) => {
      setPassword(event.target.value)
    };
  
    const onChangeOpenTime = (event) => {
      setOpenTime(event.target.value)
    };
  
    const onChangeContact = (event) => {
      setContact(event.target.value)
    };
  
    const onChangeCloseTime = (event) => {
      setCloseTime(event.target.value)
    };
  
    const resetInputs = () => {
      setManName("")
      setShopName("")
      setEmail("")
      setOpenTime("")
      setCloseTime("")
      setContact("")
      setPassword("")
      setDate(null)
    };
  
    const onSubmit = (event) => {
      event.preventDefault()
  
      const newvendorUser = {
        man_name: man_name,
        shop_name: shop_name,
        email: email,
        open_time: open_time,
        close_time: close_time,
        password: password,
        contact_number: contact_number,
        date: Date.now(),
      }
  
      axios
        .post("http://localhost:4000/vendor/register", newvendorUser)
        .then((response) => {
          alert("Succesfully created\t" + response.data.man_name)
          console.log(response.data)
          navigate("/vendorlogin")
        })
  
      resetInputs()
    }
  
    return (
      <Grid container align={"center"} spacing={2} >
        <Grid item xs={12}>
          <TextField
            label="Manager's Name"
            variant="outlined"
            value={man_name}
            onChange={onChangeManname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Shop Name"
            variant="outlined"
            value={shop_name}
            onChange={onChangeShopName}
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
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contact Number"
            variant="outlined"
            value={contact_number}
            onChange={onChangeContact}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Open Time"
            variant="outlined"
            value={open_time}
            onChange={onChangeOpenTime}
            helperText="Enter 24Hrs time ex. 23:55"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            label="Close Time"
            variant="outlined"
            value={close_time}
            onChange={onChangeCloseTime}
            helperText="Enter 24Hrs time ex. 23:55"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit}>
            Register
          </Button>
        </Grid>
      </Grid>
    )
  }

export default Vendor_register