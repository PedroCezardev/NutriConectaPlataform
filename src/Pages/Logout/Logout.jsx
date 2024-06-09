import React from 'react';
import { Link } from "react-router-dom";
import style from "./Logout.module.css";
import profile from '../../assets/Profile.svg'
import logo from '../../assets/logo.svg';
import { GiExitDoor } from "react-icons/gi";

const Logout = () => {
  // Lógica para realizar o logout, como limpar o token de autenticação, etc.
  const handleLogout = () => {
    // Aqui você pode adicionar a lógica necessária para realizar o logout,
    // como limpar os tokens de autenticação, redirecionar para a página de login, etc.
    // Por enquanto, apenas exibiremos uma mensagem de logout.
    alert("Você foi desconectado!");
  };

  // Renderização da tela de logout
  return (
    <div className={style.divLogout}>
      <section className={style.container}>
        <div className={style.voltar}>
        <Link to="/" >
        <GiExitDoor className={style.iconeVoltar}/>
        </Link>
        <h1>Retornar</h1>
        </div>
        <div className={style.logo}>
        <img src={logo} alt="Logo" className={style.logoLogout} />
          <h2>
            <span className={style.part1}>Nutri</span><span className={style.part2}>CONECTA</span>
          </h2>
        </div>
        <section className={style.group}>
          <div className={style.title}>
            <h1>Selecione a conta para sair</h1>
          </div>
          <section className={style.information}>
            <div className={style.profilePhoto}>
              <img src={profile} alt="Foto do perfil" />
            </div>
            <div className={style.text}>
              <p>
                Conectado como <strong>Mininu Ivo</strong>
              </p>
            </div>
            <Link to="/about" className={style.buttonLink}>
              <div className={style.button}>
                <button onClick={handleLogout}>Sair</button>
              </div>
            </Link>
          </section>
          <div className={style.logout}>
            <div className={style.botao}>
              <Link to="/about" className={style.button}>
                <button onClick={handleLogout}>Sair de todas as contas</button>
              </Link>
            </div>
          </div>
        </section>
        <div className={style.termos}>
          <a href="#" className={style.link}>
            Termos Privacidade
          </a>
          <a href="#" className={style.link}>
            Gerenciar cookies
          </a>
          <a href="#" className={style.link}>
            Entre em contato com o suporte
          </a>
        </div>
      </section>
    </div>
  );
};

export default Logout;
