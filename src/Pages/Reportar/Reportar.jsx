import { useState } from 'react';
import style from './Reportar.module.css';
import SideBar from '../../Components/SideBar/SideBar';
import Content from '../../Components/Content/Content';
import NavBar from '../../Components/Navbar/NavBar';
import emailjs from 'emailjs-com';


const Tutorial = () => {
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
      <NavBar />
      <div className={style.body}>
        <SideBar />
        <Content>
          <div className={style.container}>
            <div className={style.reportar}>
              <h1> Reportar </h1>   
            </div>
            <div className={style.formContainer}>
              <div className={style.informacoesContato}>
              <h2> Contato </h2>
                    <p className={style.contato_description}>
                      Entre em contato com o suporte pelo telefone:
                      <a href="tel:+558199112895"> 81 98596-4761</a> ou email: 
                      <a href="mailto:jhonesbonifacio_18@outlook.com"> pcdasilvabeserra@gmail.com</a>
                    </p>
              </div>
              <div className={style.form}>
              <form onSubmit={handleSubmit}>
                <div className={style.inputGroup}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    required
                  />
                </div>
                <div className={style.inputGroup}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite seu email"
                    required
                  />
                </div>
                <div className={style.inputGroup}>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Digite o assunto"
                    required
                  />
                </div>
                <div className={style.inputGroup}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Digite sua mensagem"
                    required
                  />
                </div>
                <div className={style.botaoEnviar}>
                  {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                  <button type="submit">Enviar</button>
                </div>            
              </form>
            </div>
            </div>
          </div>
        </Content>
      </div>
    </>
  );
};

export default Tutorial;
