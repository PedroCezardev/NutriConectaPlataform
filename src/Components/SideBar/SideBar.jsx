import React from 'react';
import { Link } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ChatIcon from '@mui/icons-material/Chat';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import style from "./SideBar.module.css";
import {  pink } from '@mui/material/colors';
import { GoHomeFill } from "react-icons/go";
import Profile from "../../assets/Profile.svg";

const SideBar = () => {

  return (
    <div className={style.sidebar}>
      <header className={style.profile}>
        <div>
          <Link to="/Profile">
          <img src={Profile} alt="" />
          <p>Olá!</p>
          <h3>Minino Ivo</h3>
          </Link>
        </div>
      </header>
      <section className={style.Menu}>
        <h3>Menu</h3>
        <Link to="/Dashboard">
          <DashboardIcon style={{ color: 'black' }} />
          Dashboard
        </Link>
        <Link to="/">
          <GoHomeFill className={style.icon} />
          Home
        </Link>
        <Link to="/Disclosures">
          <ArticleIcon sx={{ color: pink[500] }} />
          Divulgações
        </Link>
        <Link to="/NewPost">
          <AddToPhotosIcon style={{ color: 'success' }} />
          Novo
        </Link>
        <Link to="/messages">
          <ChatIcon style={{ color: 'success' }} />
          Conversas
        </Link>
        <Link to="/About">
          <InfoIcon style={{ color: 'success' }} />
          Sobre
        </Link>
        <Link to="/tutorial">
          <AssignmentIcon style={{ color: 'success' }} />
          Tutorial
        </Link>
      </section>
      <div className={style.logout}>
        <button>
          <Link to="/Logout">
            <ExitToAppIcon style={{ color: 'primary' }} />
            Sair
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
