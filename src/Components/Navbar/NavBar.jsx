import React from 'react'
import style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <header className={style.navbar__Navbar}>
        <h1>NutriConecta</h1>
        <div className={style.input}>
            <input type="text" name="search-box" placeholder="Search" />
        </div>
    </header>
  )
}

export default NavBar