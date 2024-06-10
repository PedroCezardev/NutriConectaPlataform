import React, { useState, useRef } from 'react';
import style from "./Newpost.module.css";
import SideBar from '../../Components/SideBar/SideBar';
import Content from '../../Components/Content/Content';
import NavBar from '../../Components/Navbar/NavBar';
import { FaRegImage } from "react-icons/fa";

const NewPost = () => {
  const [formData, setFormData] = useState({
    file: '',
    titulo: '',
    message: ''
  });

  const [preview, setPreview] = useState(null); // Estado para armazenar a URL da pré-visualização
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  // Função para lidar com mudanças nos campos de entrada
  const handleChange = (event) => {
    const { name, value, files } = event.target;
    
    if (files && files[0]) {
      const file = files[0];
      setFormData(prevState => ({
        ...prevState,
        [name]: file
      }));

      // Gerar URL da pré-visualização
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de enviar o formulário e recarregar a página
    console.log('Formulário enviado com valores:', formData);

    // Exibindo mensagem de sucesso
    setErrorMessage('Mensagem enviada com sucesso! ✔️');

    // Resetando os campos do formulário
    setFormData({
      file: '',
      titulo: '',
      message: '',
    });
    setPreview(null); // Resetar a pré-visualização

    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reseta o campo de arquivo
    }

    // Aqui você pode adicionar a lógica para processar os dados do formulário, como enviá-los para um servidor
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
        <div className={style.newPost}>
          <div className={style.newPostTitulo}>
            <h1>Nova publicação</h1>
          </div>
          <div className={style.form}>
            <form onSubmit={handleSubmit}>
              <div className={style.inputImage} onClick={handleClick}>
                <FaRegImage className={style.iconePubli} />
                <h1> Inserir imagem </h1>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="file-input"
                  ref={fileInputRef}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  required
                />
                {preview && (
                  <div className={style.imagePreview}>
                    <img src={preview} alt="Pré-visualização" />
                  </div>
                )}
              </div>
              <div className={style.inputTitle}>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  placeholder="Título da publicação"
                  required
                />
              </div>
              <div className={style.inputMessage}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Texto"
                  required
                />
              </div>
              <div className={style.botaoEnviar}>
                {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                <button type="submit">Publicar</button>
              </div>
            </form>
          </div>
        </div>
      
      </Content>
    </div>
    </>
  );
};

export default NewPost;