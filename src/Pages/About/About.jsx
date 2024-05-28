import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import style from './About.module.css';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'; // Importando a logo SVG
import imagem1 from '../../assets/imagemSobre1.png';
import imagemJhones from '../../assets/fotoTeste.jpg';
import imagemHome from '../../assets/imagemHome.jpg'; // Corrigindo o caminho da imagem
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (name === '' || email === '' || subject === '' || message === '') {
      setErrorMessage('Preencha todos os campos obrigatórios 😉');
    } else {
      emailjs.sendForm('outlookMessageReport', 'template_ihzie28', e.target, 'XAvL7RxhjDLFfUFEm')
        .then(() => {
          setErrorMessage('Mensagem enviada com sucesso! ✔️');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });

          setTimeout(() => {
            setErrorMessage('');
          }, 5000);
        }, (error) => {
          alert('Oxe! Alguma coisa aconteceu de errado...', error);
        });
    }
  };

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
          <a onClick={() => scrollToSection('time')} className={style.navLink}>Nosso time</a>
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
          <h1></h1>
          <p>
            O desperdício de alimentos é uma preocupação global que afeta não apenas a
            segurança alimentar, mas também contribui significativamente para questões
            ambientais e sociais. Tanto restaurantes, supermercados e empresas de alimentos
            quanto fornecedores descartam produtos excedentes, resultando em uma perda
            desnecessária de recursos e agravando problemas como a degradação do solo, o
            aumento das emissões de gases de efeito estufa e a escassez de recursos naturais.
          </p>
          <p>
            O problema principal é o descarte inadequado de alimentos, tanto próprios para
            consumo quanto impróprios, por parte dessas empresas e fornecedores. Isso
            resulta em uma perda de recursos valiosos, contribui para a degradação ambiental e
            agrava questões sociais, como a escassez de alimentos para populações
            vulneráveis.
          </p>
          <p>
            Conectamos fornecedores de alimentos excedentes a
            organizações de resgate de alimentos interessadas em aproveitar esses produtos,
            promovendo a doação e reutilização dos alimentos em vez do descarte. Seus
            recursos incluem perfis detalhados para fornecedores e organizações, notificações
            para facilitar a comunicação e a capacidade de deixar avaliações e comentários.
          </p>
        </div>
        <div className={style.imageContainer}>
          <img src={imagemHome} alt="Imagem inicio da página" className={style.imagemHome} />
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

              <p>Contribuimos para a preservação da vida
                terrestre, um dos objetivos do ODS 15. Ao evitar o descarte de alimentos, a
                plataforma ajuda a reduzir a pressão sobre os ecossistemas do planeta.
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
              <p>Alimentos que não forem próprios para o consumo irão ser aproveitados na compostagem.</p>
            </div>
          </div>
          <div className={style.feature2}>
            <div className={style.imagemStar}>
              <img src={imagemStar} alt="Imagem diferencial1" className={style.star} />
              <h1>Diferencial 2</h1>
            </div>
            <div className={style.description}>
              <div className={style.linha}></div>
              <p>Os usuários podem deixar avaliações e comentários sobre as transações realizadas, o que ajuda a construir confiança e transparência na plataforma.</p>
            </div>
          </div>
          <div className={style.feature3}>
            <div className={style.imagemStar}>
              <img src={imagemStar} alt="Imagem diferencial1" className={style.star} />
              <h1>Diferencial 3</h1>
            </div>
            <div className={style.description}>
              <div className={style.linha}></div>
              <p>A Nutri Conecta oferece recursos educativos para conscientizar e educar os usuários sobre a importância da redução do desperdício de alimentos.</p>
            </div>
          </div>
          <div className={style.feature4}>
            <div className={style.imagemStar}>
              <img src={imagemStar} alt="Imagem diferencial1" className={style.star} />
              <h1>Diferencial 4</h1>
            </div>
            <div className={style.description}>
              <div className={style.linha}></div>
              <p>A plataforma oferece perfis detalhados para ambos os fornecedores e organizações, permitindo uma melhor compreensão de suas necessidades e disponibilidades.</p>
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
      <div id="time" className={style.time}>
        <div className={style.timeTitulo}>
          <h1>Nosso time</h1>
        </div>
        <div className={style.containerTime}>

          <div className={style.timeIntegrante1}>
            <div className={style.fotoIntegrante1}>
              <img src={imagemJhones} alt="Imagem diferencial2" className={style.fotoTeste} />
            </div>
            <h1> Jhones Silva </h1>
            <p> Web developer </p>

            <div className={style.linkTime}>
              <a href='https://www.instagram.com/jhon_devp/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className={style.iconeTime} />
              </a>
              <a href='https://github.com/PedroCezardev/NutriConectaPlataform' target='_blank' rel='noopener noreferrer'>
                <FaGithub className={style.iconeTime} />
              </a>
              <a href='https://www.linkedin.com/in/jhonesbonifaciodasilva/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className={style.iconeTime} />
              </a>
          </div>
        </div>
        <div className={style.timeIntegrante2}>
          <div className={style.fotoIntegrante2}>
            <img src={imagemJhones} alt="Imagem diferencial2" className={style.fotoTeste} />
          </div>
          <h1> Jhones Silva </h1>
          <p> Web developer </p>

          <div className={style.linkTime}>
            <a href='https://www.instagram.com/jhon_devp/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className={style.iconeTime} />
            </a>
            <a href='https://github.com/PedroCezardev/NutriConectaPlataform' target='_blank' rel='noopener noreferrer'>
              <FaGithub className={style.iconeTime} />
            </a>
            <a href='https://www.linkedin.com/in/jhonesbonifaciodasilva/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className={style.iconeTime} />
            </a>
          </div>
        </div>
        <div className={style.timeIntegrante3}>
          <div className={style.fotoIntegrante3}>
            <img src={imagemJhones} alt="Imagem diferencial2" className={style.fotoTeste} />
          </div>
          <h1> Jhones Silva </h1>
          <p> Web developer </p>

          <div className={style.linkTime}>
            <a href='https://www.instagram.com/jhon_devp/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className={style.iconeTime} />
            </a>
            <a href='https://github.com/PedroCezardev/NutriConectaPlataform' target='_blank' rel='noopener noreferrer'>
              <FaGithub className={style.iconeTime} />
            </a>
            <a href='https://www.linkedin.com/in/jhonesbonifaciodasilva/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className={style.iconeTime} />
            </a>
          </div>
        </div>


        <div className={style.timeIntegrante4}>
          <div className={style.fotoIntegrante4}>
            <img src={imagemJhones} alt="Imagem diferencial2" className={style.fotoTeste} />
          </div>
          <h1> Jhones Silva </h1>
          <p> Web developer </p>
          <div className={style.linkTime}>
            <a href='https://www.instagram.com/jhon_devp/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className={style.iconeTime} />
            </a>
            <a href='https://github.com/PedroCezardev/NutriConectaPlataform' target='_blank' rel='noopener noreferrer'>
              <FaGithub className={style.iconeTime} />
            </a>
            <a href='https://www.linkedin.com/in/jhonesbonifaciodasilva/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className={style.iconeTime} />
            </a>
          </div>
        </div>
      </div>
    </div >
      <div id="duvidas" className={style.duvidas}>
        <div className={style.tituloDuvidas}>
          <h1>Frequentemente perguntados</h1>
        </div>
        <div className={style.duvidasContainer}>

          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={style.expandIcon} />} // Use a classe correta aqui
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <span className={style.accTitle}>Vocês possuem um tutorial de como usar a plataforma?</span>
              {/* Conteúdo do AccordionSummary */}
            </AccordionSummary>
            <AccordionDetails className={style.accordionDetails}>
              Sim, desenvolvemos um tutorial exclusivo e intuitivo para todos os nossos futuros usuários.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={style.expandIcon} />} // Use a classe correta aqui
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <span className={style.accTitle}>Quais são os recursos oferecidos pela plataforma para facilitar a comunicação entre fornecedores de alimentos e ongs?</span>
            </AccordionSummary>
            <AccordionDetails className={style.accordionDetails}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={style.expandIcon} />} // Use a classe correta aqui
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <span className={style.accTitle}>Quais os recursos educativos a Nutri Conecta oferece para conscientizar os usuários?</span>
            </AccordionSummary>
            <AccordionDetails className={style.accordionDetails}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={style.expandIcon} />} // Use a classe correta aqui
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <span className={style.accTitle}>Qual é a importância da funcionalidade de conexão com coletores de alimentos para adubagem oferecida pela Nutri Conecta?</span>
            </AccordionSummary>
            <AccordionDetails className={style.accordionDetails}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className={style.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={style.expandIcon} />} // Use a classe correta aqui
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <span className={style.accTitle}>Quais são os tipos de usuários que a plataforma nutriConecta tem?</span>
            </AccordionSummary>
            <AccordionDetails className={style.accordionDetails}>
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
