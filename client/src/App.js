import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import React from 'react'
import LoginNavbar from './components/navbar/loginnav'
import Buyer_login from './components/common/buyerLogin'
import Buyer_register from './components/common/buyerReg'
import Vendor_login from './components/common/vendorLogin'
import Vendor_register from './components/common/vendorReg'

const Layout = () => {
  return (
    <div>
      <LoginNavbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
          
          {/* <Route path="buyerhome" element={<Buyer_Home />} /> */}
          {/* <Route path="buyerprofile" element={<Buyer_Profile />} /> */}
          {/* <Route path="buyerfav" element={<Buyer_Fav />} /> */}
          {/* <Route path="vendorhome" element={<Vendor_Home />} /> */}
          {/* <Route path="vendorprofile" element={<Vendor_Profile />} /> */}
          <Route path="/" element={<Layout />}>
          <Route path="buyerlogin" element={<Buyer_login />} />
          <Route path="vendorlogin" element={<Vendor_login />} />
          <Route path="buyerreg" element={<Buyer_register />} />
          <Route path="vendorreg" element={<Vendor_register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
