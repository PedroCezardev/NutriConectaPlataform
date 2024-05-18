import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes  , Route } from 'react-router-dom';

import Home from "./Pages/Home/Home";
import DashBoard from "./Pages/Dashboard/Dashboard";
import Disclosures from "./Pages/Disclosures/Disclosures";
import About from "./Pages/About/About";
import NewPost from "./Pages/NewPost/NewPost";
import Profile from "./Pages/Profile/Profile";
import Tutorial from "./Pages/Tutorial/Tutorial";
import Messages from "./Pages/Messages/Messages";
import Login from "./Pages/Login/Login";
import Logout from "./Pages/Logout/Logout";

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
            <Route path='/Tutorial' element={<Tutorial />} />
            <Route path='/Messages' element={<Messages />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
        </Routes>
    </>
  )
}

export default App
