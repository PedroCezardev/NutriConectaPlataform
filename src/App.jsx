import './App.css'
import { BrowserRouter as Router, Routes  , Route } from 'react-router-dom';
import React, { useState } from 'react';

import Home from "./Pages/Home/Home";
import DashBoard from "./Pages/Dashboard/Dashboard";
import Disclosures from "./Pages/Disclosures/Disclosures";
import About from "./Pages/About/About";
import NewPost from "./Pages/NewPost/NewPost";
import Profile from "./Pages/Profile/Profile";
import Reportar from "./Pages/Reportar/Reportar";
import Login from "./Pages/Login/Login";
import Logout from "./Pages/Logout/Logout";
import ProductModal from './Pages/ProductModal/ProductModal'
import AddDonation from './Pages/AddDonation/AddDonation';
import NotFound from './Pages/PageNotfound/PageNotFound';

function App() {
  return (

    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/disclosures' element={<Disclosures />} />
            <Route path='/about' element={<About />} />
            <Route path='/newpost' element={<NewPost />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/Reportar' element={<Reportar />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/productmodal' element={<ProductModal />} />
            <Route path='/adddonation' element={<AddDonation />} />
            <Route path= "*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
