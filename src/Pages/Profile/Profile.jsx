import React from 'react';
import style from "./Profile.module.css";
import Content from '../../Components/Content/Content';
import NavBar from '../../Components/Navbar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import McDonaldsImage from '../../assets/image.Mcdonalds.svg'; 

const Profile = () => {
  return (
    <>
      <div className={style.container}>
        <NavBar />

        <div className={style.body}>
          <SideBar />

          <Content>
            <section>
              <div className={style.title}>
                <div className={style.headingWrapper}>
                  <div className={style.profileHeader}>
                    <img src={McDonaldsImage} alt="McDonalds" className={style.profileImage} />
                    <div className={style.textWrapper}>
                      <h2 className={style.profileTitle}>Meu Perfil</h2>
                      <h3 className={style.accountTitle}>Gerenciar Conta</h3>
                    </div>
                  </div>
                </div>
                <div className={style.rectangleEditar}> 
                  <p><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFF"><path d="M216-216h51l375-375-51-51-375 375v51Zm-72 72v-153l498-498q11-11 23.84-16 12.83-5 27-5 14.16 0 27.16 5t24 16l51 51q11 11 16 24t5 26.54q0 14.45-5.02 27.54T795-642L297-144H144Zm600-549-51-51 51 51Zm-127.95 76.95L591-642l51 51-25.95-25.05Z"/></svg>Editar</p>
                </div>
                <div className={style.rectangleInfo}>
                  <h3 className={style.rectangleTitleInfo}> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F17022">
                      <path d="M444-288h72v-240h-72v240Zm35.79-312q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm.49 504Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/>
                    </svg> Informações
                  </h3>
                  <div className={style.textInsideRectangleInfo}>
                    <p>Nome da Instituição: McDonalds</p>
                    <p>CNPJ: 42.591.651/0001-43</p>
                    <p>Contato (Email ou Telefone): (81) 3231-4510</p>
                    <p>Endereço: Av. Gov. Agamenon Magalhães 3849, Recife, PE, 50070-160</p>
                  </div>
                </div>
                <div className={style.rectangleContainer}>
                  <div className={style.rectangleSobre}>
                    <h3 className={style.rectangleTitleSobre}> 
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F17022">
                        <path d="M0-240v-59q0-51 45-80t123-29q15 0 30 1.5t30 4.5q-17 20-26.5 45t-9.5 50.56V-240H0Zm240 0v-61q0-27.86 14.5-50.93T293-387q44-22 91-33.5t95.53-11.5Q529-432 576-420.5t91 33.5q24 12 38.5 35.07T720-301v61H240Zm528 0v-67.37q0-26.95-9.5-50.79T732-402q17-3 31.5-4.5T792-408q78 0 123 29t45 80v59H768Zm-454-72h332q-7-17-59.5-32.5T480-360q-54 0-106.5 15.5T314-312ZM167.79-456Q138-456 117-477.03q-21-21.02-21-50.55Q96-558 117.03-579q21.02-21 50.55-21Q198-600 219-579.24t21 51.45Q240-498 219.24-477t-51.45 21Zm624 0Q762-456 741-477.03q-21-21.02-21-50.55Q720-558 741.03-579q21.02-21 50.55-21Q822-600 843-579.24t21 51.45Q864-498 843.24-477t-51.45 21ZM479.5-480q-49.5 0-84.5-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85.5q0 49.5-35 84.5t-85.5 35Zm.5-72q20.4 0 34.2-13.8Q528-579.6 528-600q0-20.4-13.8-34.2Q500.4-648 480-648q-20.4 0-34.2 13.8Q432-620.4 432-600q0 20.4 13.8 34.2Q459.6-552 480-552Zm0 240Zm0-288Z"/>
                      </svg> Sobre
                    </h3>
                    <div className={style.textInsideRectangleSobre}>
                      <p>Fundada em 1940 por Richard e Maurice McDonald, a empresa teve início como um modesto 
                        restaurante de hambúrgueres na Califórnia. Desde então, expandiu-se globalmente, tornando-se um 
                        símbolo da cultura americana e uma potência no setor de alimentação rápida. Com sua abordagem inovadora 
                        de serviço rápido e menu padronizado, a McDonald's revolucionou a indústria de restaurantes e continua a 
                        ser uma marca reconhecida em todo o mundo.</p>
                    </div>
                  </div>
                  <div className={style.rectangleEstatisticas}>
                    <h3 className={style.rectangleTitleEstatisticas}> 
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F17022">
                        <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/>
                      </svg> Estatísticas
                    </h3>
                    <div className={style.textInsideRectangleEstatisticas}>
                      <p className={style.statNumber}>8</p>
                      <p>Postagens divulgadas na plataforma por seu perfil</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.contentHome}></div>
            </section>
          </Content>
        </div>
      </div>
    </>
  );
}

export default Profile;
