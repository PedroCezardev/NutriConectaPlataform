import React from 'react';
import { Link } from 'react-router-dom';
import style from "./NotFound.module.css";
import Home from '../Home/Home';


const PageNotFound = () => {
  return (
    <div className={style.container}>
        <h3>404</h3>
        <h1>Page not found</h1>
        <p>Lamentamos, mas não conseguimos encontrar a página que procura.</p>
        <div className={style.buttons}>
            <button>
                <Link to="/">
                    Back to Home
                </Link>
            </button>
            <button>
                <Link to="/About">
                    contact support
                </Link>
            </button>
        </div>
        
    </div>
  )
}

export default PageNotFound