import React from 'react';
import style from './Reportar.module.css';
import SideBar from '../../Components/SideBar/SideBar';
import Content from '../../Components/Content/Content';
import NavBar from '../../Components/Navbar/NavBar';

const Tutorial = () => {
  return (
    <>
    <NavBar />
    <div className={style.body}>
      <SideBar />
      <Content>       
      <section className={style.container}>
        <div className={style.report}>
            <h1 style={{ fontSize: '2rem' }}>Reportar</h1>
        </div>
        <section className={style.group}>
            
          <div className={style.contato__content}>
            <div className={style.top}>
              <div className={style.descricao}>
                <div className={style.contato}>
                  <h2>Entre em contato: </h2>
                  <p className={style.contato__description}>
                    Entre em contato com a plataforma pelo telefone:
                    <a href="tel:+558199112895"> 81 98596-4761</a> ou email:
                    <a href="mailto:jhonesbonifacio_18@outlook.com">pcdasilvabeserra@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <form className={style.contact}>
              <div className={style.section}>
                <div className={style.input}>
                  <input type="text" name="name" placeholder="Seu nome *" className={style.contato__input} id="sendername" />
                </div>
                <div className={style.input}>
                  <input type="email" name="email" placeholder="Seu email *" className={style.contato__input} id="to" />
                </div>
                <div className={style.input}>
                  <input type="text" name="subject" placeholder="Assunto" className={style.contato__input} id="subject" />
                </div>
                <div className={style.description}>
                  <textarea name="message" id="message" className={style.contato__input_textarea} placeholder="Sua mensagem"></textarea>
                </div>
                  
                <p className={style.mensagem__erro} id="mensagem-erro"></p>
              </div>
              <div className={style.button}>
                <button id="emailButton">ENVIAR</button>
              </div>
            </form>
          </div>
        </section>
      </section>
      </Content>
    </div>
    </>
  );
};

export default Tutorial;
