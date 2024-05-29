import React from 'react';
import { Link } from 'react-router-dom';
import style from "./SideBar.module.css";
import Profile from "../../assets/Profile.svg";

import { GoHomeFill } from "react-icons/go";
import { RiDashboardFill } from "react-icons/ri";
import { MdArticle } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { IoMdExit } from "react-icons/io";

const SideBar = () => {

  return (
    <div className={style.sidebar}>
      <header className={style.profile}>
        <div>
          <Link to="/Profile" style={{ textDecoration: 'none', color: 'black' }}>
            <img src={Profile} alt="" />
            <h1>Olá! <br></br> Minino Ivo</h1>
          </Link>
        </div>
      </header>
      <section className={style.Menu}>
        <h3>Menu</h3>
        <Link to="/Dashboard">
          <RiDashboardFill className={style.icon} />
          Dashboard
        </Link>
        <Link to="/">
          <GoHomeFill className={style.icon} />
          Home
        </Link>
        <Link to="/Disclosures">
          <MdArticle className={style.icon} />
          Divulgações
        </Link>
        <Link to="/NewPost">
          <MdAddToPhotos className={style.icon} />
          Novo
        </Link>
        <Link to="/messages">
        <BsChatLeftTextFill className={style.icon} />
          Conversas
        </Link>
        <Link to="/About">
        <FaInfoCircle className={style.icon} />
          Sobre
        </Link>
        <Link to="/Reportar">
          <MdAssignment className={style.icon} />
          Reportar
        </Link>
      </section>
      <div className={style.logout}>
        <button>
          <Link to="/Logout">
            <IoMdExit className={style.iconExit} />
            Sair
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
