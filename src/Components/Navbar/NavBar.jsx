import React, {useState, useEffect} from 'react'
import style from "./Navbar.module.css";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const NavBar = () => {
    // Função para obter o tema do localStorage ou usar o tema padrão 'light'
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  };

  // Estado do tema
  const [theme, setTheme] = useState(getInitialTheme);

  // Efeito para aplicar o tema ao carregar o componente
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={style.navbar__Navbar}>
      <div className={style.logo}>
        <h1>NutriConecta</h1>
      </div>

      <div className={style.menu}>
        <div className={style.darkMode}>
          <button className={style.button} onClick={toggleTheme} >
            {theme === 'light' ? 
              <MdDarkMode className={style.icon} /> : 
              <MdLightMode className={style.iconActive} />}
          </button>
        </div>
        <div className={style.input}>
          <input type="text" name="search-box" placeholder="Search" />
        </div>
      </div>
    </header>
  )
}

export default NavBar