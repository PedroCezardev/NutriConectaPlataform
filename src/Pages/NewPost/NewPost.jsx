import React from 'react'
import style from "./Newpost.module.css"
import Content from '../../Components/Content/Content'
import NavBar from '../../Components/Navbar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'

const NewPost = () => {
  return (
    <>
      <div className={style.body}>
        <SideBar />

        <Content> 
          <section className={style.container}>
            <div className={style.slider}></div>
            <div className={style.title} style={{ paddingLeft: '20px' }}>
              <h1>Novo Post</h1>
            </div>
            <div className={style.rectangleInserirImg}>
              <p className={style.rectangleTitleInserirImg}>Inserir imagem</p>
            </div>
            <div className={style.rectangleTituloDaPublicacao}>
              <p className={style.rectangleTitlePublic}>Título da publicação</p>
            </div>
            <div className={style.rectangleTexto}>
              <p className={style.rectangleTitleTexto}>Texto</p>
            </div>
            <div className={style.rectanglePublicar}> 
                  <p>Publicar</p>
                  </div>
          </section>
        </Content>
      </div>
    </>
  )
}

export default NewPost
