import React, { useState, useRef } from 'react';
import style from "./AddDonation.module.css";
import SideBar from '../../Components/SideBar/SideBar';
import Content from '../../Components/Content/Content';
import NavBar from '../../Components/Navbar/NavBar';

const AddDonation = () => {
  const [formData, setFormData] = useState({
    name: '',
    manufactureDate: '',
    expiryDate: '',
    quantity: '',
    description: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    
    if (files && files[0]) {
      const file = files[0];
      setFormData(prevState => ({
        ...prevState,
        [name]: file
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Formulário enviado com valores:', formData);

    setErrorMessage('Mensagem enviada com sucesso! ✔️');

    setFormData({
      name: '',
      manufactureDate: '',
      expiryDate: '',
      quantity: '',
      description: ''
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = ''; 
    }
  };
  
  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
    <NavBar/>
    <div className={style.body}>
      <SideBar />
      <Content>
        <div className={style.newDonation}>
          <div className={style.DonationTitulo}>
            <h1>Nova Doação</h1>
          </div>
          <div className={style.form}>
            <form onSubmit={handleSubmit}>
              <div className={style.inputTitle}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome do alimento disponível"
                  required
                />
              </div>
              <div className={`${style.inputDate} ${style.formItem}`}> 
              <label htmlFor="manufactureDate">Data de Fabricação</label>
                <input
                  type="date"
                  id="manufactureDate"
                  name="manufactureDate"
                  value={formData.manufactureDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.inputDate}>
                <label htmlFor="expiryDate">Data de Validade</label>
                <input
                  type="date"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={style.inputQuantity}>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Quantidade disponível"
                  required
                />
              </div>
              <div className={style.inputDescription}>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descrição"
                  required
                ></textarea>
              </div>
              <div className={style.botaoEnviar}>
                {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                <button type="submit" className={style.submitButton}>Concluir Doação</button>
              </div>
            </form>
          </div>
        </div>
      
      </Content>
    </div>
    </>
  );
};

export default AddDonation;
