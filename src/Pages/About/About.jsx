import React from 'react';
import style from './About.module.css';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'; // Importando a logo SVG
import imagem1 from '../../assets/imagemSobre1.png'; // Corrigindo o caminho da imagem
import imagemStar from '../../assets/star.svg';
import imagemOds2 from '../../assets/ods2.svg';
import imagemOds12 from '../../assets/ods12.svg';
import imagemOds15 from '../../assets/ods15.svg';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const About = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.logoContainer}>
          <img src={logo} alt="Logo" className={style.logo} />
          <h2>
            <span className={style.part1}>Nutri</span><span className={style.part2}>CONECTA</span>
          </h2>
        </div>
        <nav className={style.nav}>
          <a onClick={() => scrollToSection('home')} className={style.navLink}>Home</a>
          <a onClick={() => scrollToSection('beneficios')} className={style.navLink}>Benefícios</a>
          <a onClick={() => scrollToSection('diferenciais')} className={style.navLink}>Diferenciais</a>
          <a onClick={() => scrollToSection('novidades')} className={style.navLink}>Novidades</a>
          <a onClick={() => scrollToSection('duvidas')} className={style.navLink}>Dúvidas</a>
        </nav>
        <div className={style.loginGetStarted}>
          <div className={style.login}>
            <Link to="/login" className={style.loginButton}>Login</Link>
          </div>
          <div className={style.getStarted}>
            <Link to="/login" className={style.getStartedButton}>Get Started</Link>
          </div>
        </div>
      </header>
      <div id="home" className={style.homeContainer}>
        <div className={style.textContainer}>
          <h1>NutriCONECTA</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={style.imageContainer}>
          <img src={imagem1} alt="Imagem Sobre" className={style.imagem1} />
        </div>
      </div>
      <div id="beneficios" className={style.beneficios}>
        <div className={style.beneficiosContainer}>
          <div className={style.card}>
            <div className={style.imagemOds}>
              <div className={style.odsIcon}>
                <img src={imagemOds2} alt="Imagem diferencial1" className={style.star} />
                <h2>Benefícios da ods 2:</h2>
              </div>
              <p>A solução proposta está em sintonia com o ODS 2, que visa acabar com a fome,
                alcançar a segurança alimentar e melhoria da nutrição, e promover a agricultura
                sustentável.</p>
            </div>
          </div>
        </div>
        <div className={style.beneficiosContainer}>
          <div className={style.card}>
            <div className={style.imagemOds}>
              <div className={style.odsIcon}>
                <img src={imagemOds12} alt="Imagem diferencial1" className={style.star} />
                <h2>Benefícios da ods 12</h2>
              </div>
              <p>A nossa plataforma visa promover o consumo e a produção responsáveis, reduzindo o
                desperdício de alimentos por meio de práticas comerciais mais sustentáveis,
                alinhando-se aos princípios da ODS.</p>
            </div>
          </div>
        </div>
        <div className={style.beneficiosContainer}>
          <div className={style.card}>
            <div className={style.imagemOds}>
              <div className={style.odsIcon}></div>
              <img src={imagemOds15} alt="Imagem diferencial1" className={style.star} />
              <h2>Benefícios da ods 15</h2>

              <p>Ao reduzir o desperdício de alimentos também contribui para a preservação da vida
                terrestre, um dos objetivos do ODS 15. Ao evitar o descarte de alimentos, a
                plataforma ajuda a reduzir a pressão sobre os ecossistemas terrestres, mitigando a
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="diferenciais" className={style.diferenciais}>
        <div className={style.tituloDiferencial}>
          <h1>Diferenciais da NutriConecta</h1>
        </div>
        <div className={style.diferecialContainer}>
          <div className={style.feature1}>
            <div className={style.imagemStar}>
              <img src={imagemStar} alt="Imagem diferencial1" className={style.star} />
              <h1>Diferencial 1</h1>
            </div>
            <div className={style.description}>
              <div className={style.linha}></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className={style.feature2}>
            <div className={style.imagemStar}>
              <img src={imagemStar} alt="Imagem diferencial1" className={style.star} />
              <h1>Diferencial 2</h1>
            </div>
            <div className={style.description}>
              <div className={style.linha}></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className={style.feature3}>
            <div className={style.imagemStar}>
              <img src={imagemStar} alt="Imagem diferencial1" className={style.star} />
              <h1>Diferencial 3</h1>
            </div>
            <div className={style.description}>
              <div className={style.linha}></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className={style.feature4}>
            <div className={style.imagemStar}>
              <img src={imagemStar} alt="Imagem diferencial1" className={style.star} />
              <h1>Diferencial 4</h1>
            </div>
            <div className={style.description}>
              <div className={style.linha}></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="novidades" className={style.novidades}>
        <div className={style.tituloNovidade}>
          <h1>Novidades</h1>
        </div>
        <div className={style.imagem1}>
          <img src={imagem1} alt="Imagem novidades" className={style.imagem1} />
        </div>
        <div className={style.destaque1}>
          <h1>Destaque 1</h1>
        </div>
        <div className={style.imagem1}>
          <img src={imagem1} alt="Imagem diferencial1" className={style.imagem1} />
        </div>
        <div className={style.destaque2}>
          <h1>Destaque 2</h1>
        </div>
        <div className={style.imagem1}>
          <img src={imagem1} alt="Imagem diferencial2" className={style.imagem1} />
        </div>
        <div className={style.destaque3}>
          <h1>Destaque 3</h1>
        </div>
        <div className={style.imagem1}>
          <img src={imagem1} alt="Imagem diferencial2" className={style.imagem1} />
        </div>
      </div>
      <div id="duvidas" className={style.duvidas}>
        <div className={style.tituloDuvidas}>
          <h1>Frequentemente perguntados</h1>
        </div>
        <div className={style.duvidasContainer}>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Pergunta 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Pergunta 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Pergunta 3
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Pergunta 4
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Pergunta 5
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className={style.icones}>

        <a href='mailto:jhonesbonifacio_18@outlook.com' target='_blank' rel='noopener noreferrer'>
          <MdEmail className={style.icone} />
        </a>

        <a href='https://www.instagram.com/jhon_devp/' target='_blank' rel='noopener noreferrer'>
          <FaInstagram className={style.icone} />
        </a>

        <a href='https://github.com/PedroCezardev/NutriConectaPlataform' target='_blank' rel='noopener noreferrer'>
          <FaGithub className={style.icone} />
        </a>

        <a href='https://www.linkedin.com/in/jhonesbonifaciodasilva/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className={style.icone} />
        </a>

      </div>
      <div className={style.linhaFooter}></div>
      <footer className={style.footer}>
        <p>© 2024 NutriConecta. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default About;