import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Home.module.css";
import Content from "../../Components/Content/Content";
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/Navbar/NavBar';
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from '@mui/icons-material/Comment';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

import Padaria from "../../assets/image.Padaria.svg";
import Mcdonalds from "../../assets/image.Mcdonalds.svg";
import fundo1 from "../../assets/imagemFundo1.svg";
import fundo2 from "../../assets/imagemFundo2.svg";
import fundo3 from "../../assets/imagemFundo3.svg";
import fundo4 from "../../assets/imagemFundo4.svg";

const Home = () => {
  return (
    <>
    <div className={style.container}>
      <NavBar />

      <div className={style.body}>
        <SideBar />

        <Content> 
          <section className={style.container}>

            <div className={style.sliderContainer}>
              <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3000, // Tempo de atraso entre as transições automáticas (em milissegundos)
                    disableOnInteraction: false, // Continue o autoplay mesmo após a interação do usuário
                  }}
                  
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide><img src={fundo1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={fundo4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={fundo2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={fundo3} alt="" /></SwiperSlide>
              </Swiper>
            </div>

          <div className={style.group}>
              <div className={style.Home}>
              <div className={style.title}>
                <h1>Home</h1>
              </div>
                <div className={style.contantHome}>
                  <div className={style.titleContant}>
                    <h3>Reginaldo Rossi</h3>
                    <p className={style.DataTime}>09:34</p>
                  </div>
                  <div className={style.text}>
                    <p>Uma alimentação saudável ajuda a proteger contra a má nutrição em todas as suas formas, 
                      bem como contra as doenças crônicas não transmissíveis (DCNT), entre elas diabetes, 
                      doenças cardiovasculares, AVC e câncer.
                    </p>
                  </div>
                  <div className={style.Comentarys}>
                    <div className={style.icons}>
                      <FavoriteIcon style={{ color: 'primary' }} />
                      <CommentIcon style={{ color: 'primary' }} />
                    </div>
                    <div className={style.DataTime}>
                      <p>29 de abril de 2024</p>
                    </div>
                  </div>
                </div>

                <div className={style.contantHome}>
                  <div className={style.titleContant}>
                    <h3>Luiz Gonzaga</h3>
                    <p className={style.DataTime}>09:34</p>
                  </div>
                  <div className={style.text}>
                    <p>Para armazenar corretamente os alimentos, as frutas, assim como as 
                      verduras e os legumes, devem ser guardados na parte inferior da geladeira. 
                      Nesse local as temperaturas não são tão baixas quanto na parte superior.
                    </p>
                  </div>
                  <div className={style.Comentarys}>
                    <div className={style.icons}>
                      <FavoriteIcon style={{ color: 'primary' }} />
                      <CommentIcon style={{ color: 'primary' }} />
                    </div>
                    <div className={style.DataTime}>
                      <p>29 de abril de 2024</p>
                    </div>
                  </div>
                </div>

                <div className={style.contantHome}>
                  <div className={style.titleContant}>
                    <h3>Silvano Salles</h3>
                    <p className={style.DataTime}>09:34</p>
                  </div>
                  <div className={style.text}>
                    <p>Depois de acondicionado, o material deve ser remexido diariamente para proporcionar
                       ventilação. E minhocas também são bastante úteis para esse processo de aeração do composto. 
                       Além disso, é importante que seja mantido em um local sem acúmulo intenso de água.
                    </p>
                  </div>
                  <div className={style.Comentarys}>
                    <div className={style.icons}>
                      <FavoriteIcon style={{ color: 'primary' }} />
                      <CommentIcon style={{ color: 'primary' }} />
                    </div>
                    <div className={style.DataTime}>
                      <p>29 de abril de 2024</p>
                    </div>
                  </div>
                </div>
              </div>

            <div className={style.Information}>
              <div className={style.title}>
                <h1>Notificações</h1>
              </div>
              <div className={style.Notification}>
                <div className={style.header}>
                  <div className={style.imgProfile}>
                    <img src={Padaria} alt="" />
                  </div>
                  <div className={style.info}>
                    <h3>Padaria Del Rei</h3>
                    <p>Data de validade: 18/05/2024</p>
                    <p>Quantidade Disponível: 25 unidades.</p>
                  </div>
                </div>
                  <div className={style.description}>
                    <p>Estamos oferecendo 80 pães francês, 2 kilos de queijo qualho e 3 kilos de mortandela de frango. 
                      Validade do Queijo ate 4 dias e o demais 7 dias.
                    </p>
                    <button>
                      <Link to="/Disclosures">
                        Detalhes
                      </Link>
                    </button>
                  </div>
              </div>

              <div className={style.Notification}>
                <div className={style.header}>
                  <div className={style.imgProfile}>
                    <img src={Mcdonalds} alt="" />
                  </div>
                  <div className={style.info}>
                    <h3>McDonald's</h3>
                    <p>Data de validade: 17/05/2024</p>
                    <p>Quantidade Disponível: 15 unidades.</p>
                  </div>
                </div>
                  <div className={style.description}>
                    <p>Estamos oferecendo 80 pães francês, 2 kilos de queijo qualho e 3 kilos de mortandela de frango. 
                      Validade do Queijo ate 4 dias e o demais 7 dias.
                    </p>
                    <button>
                      <Link to="/Disclosures">
                        Detalhes
                      </Link>
                    </button>
                  </div>
              </div>

              <div className={style.Notification}>
                <div className={style.header}>
                  <div className={style.imgProfile}>
                    <img src={Padaria} alt="" />
                  </div>
                  <div className={style.info}>
                    <h3>Padaria Del Rei</h3>
                    <p>Data de validade: 18/05/2024</p>
                    <p>Quantidade Disponível: 25 unidades.</p>
                  </div>
                </div>
                  <div className={style.description}>
                    <p>Estamos oferecendo 80 pães francês, 2 kilos de queijo qualho e 3 kilos de mortandela de frango. 
                      Validade do Queijo ate 4 dias e o demais 7 dias.
                    </p>
                    <button>
                      <Link to="/Disclosures">
                        Detalhes
                      </Link>
                    </button>
                  </div>
              </div>
              </div>
            </div>
          </section>
        </Content>
        
      </div>
    </div>
    </>
  )
}

export default Home