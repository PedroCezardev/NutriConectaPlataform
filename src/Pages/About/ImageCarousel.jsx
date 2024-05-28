import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import imagem1 from '../../assets/imagemSobre1.png';
import imagem2 from '../../assets/imagemSobre1.png';
import imagem3 from '../../assets/imagemSobre1.png';

const ImageCarousel = () => {
  return (
    <div className={style.imagem1}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={imagem1} alt="Imagem novidades" className={style.imagem} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem2} alt="Imagem novidades" className={style.imagem} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem3} alt="Imagem novidades" className={style.imagem} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
