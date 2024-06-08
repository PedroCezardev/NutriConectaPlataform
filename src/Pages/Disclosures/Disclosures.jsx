import React, { useState } from 'react';
import style from './Disclosures.module.css';
import { Link } from 'react-router-dom';
import Content from '../../Components/Content/Content';
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/Navbar/NavBar';
import Padaria from '../../assets/image.Padaria.svg';
import Mcdonalds from '../../assets/image.Mcdonalds.svg';
import atacarejo from '../../assets/novoatacarejo.svg';
import paodeaçucar from '../../assets/pãodeaçucar.svg';
import Divulgacoes from '../../assets/Divulgacoes.svg';
import BurgerKingLogo from '../../assets/BurgerKingLogo.png';
import CarrefuorLogo from '../../assets/CarrefuorLogo.png';
import BodeDoNoLogo from '../../assets/BodeDoNoLogo.png';
import GiraffasLogo from '../../assets/GiraffasLogo.png';
import BigBomprecoLogo from '../../assets/BigBomprecoLogo.png';
import RmExpressLogo from '../../assets/RmExpressLogo.png';
import ProductModal from '../ProductModal/ProductModal';
import AddDonation from '../AddDonation/AddDonation';
import { MdAddToPhotos } from "react-icons/md";

const Disclosures = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      postedDate: '18/04/2024',
      image: Padaria,
      name: 'Padaria Del Rei',
      manufactureDate: '17/05/2024',
      expiryDate: '19/05/2024',
      quantity: '25 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'R. Cruzeiro do Forte, 242 - Boa Viagem, Recife - PE, 51030-620',
      phone: '(81) 98708-7305'
    },
    {
      postedDate: '15/05/2024',
      image: Mcdonalds,
      name: 'Mcdonalds',
      manufactureDate: '15/05/2024',
      expiryDate: '20/05/2024',
      quantity: '10 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'Av. Eng. Abdias de Carvalho, 336 - LUC 01 - Madalena, Recife - PE, 50750-500',
      phone: ': 0800 888 1955'
    },
    {
      postedDate: '15/05/2024',
      image: paodeaçucar,
      name: 'Pão de açúcar',
      manufactureDate: '15/05/2024',
      expiryDate: '20/05/2024',
      quantity: '10 unidadess',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'Rua Desembargador Góis Cavalcante, 261 - Parnamirim, Recife - PE, 52060-140',
      phone: '0800 779 6761'
    },
    {
      postedDate: '15/05/2024',
      image: atacarejo,
      name: 'Novo atacarejo',
      manufactureDate: '15/05/2024',
      expiryDate: '20/05/2024',
      quantity: '10 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'Estr. dos Remédios, 669 - Afogados, Recife - PE, 50750-360',
      phone: 'Telefone: (81) 98146-3261'
    },
    {
      postedDate: '04/05/2024',
      image: BurgerKingLogo,
      name: 'Burguer King',
      manufactureDate: '01/06/2024',
      expiryDate: '10/06/2024',
      quantity: '18 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'Estr. dos Remédios, 669 - Afogados, Recife - PE, 50750-360',
      phone: 'Telefone: (81) 98146-3261'
    },
    {
      postedDate: '29/05/2024',
      image: CarrefuorLogo,
      name: 'Carrefour Hipermercado',
      manufactureDate: '25/05/2024',
      expiryDate: '08/05/2024',
      quantity: '6 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'R. Francisco da Cunha, 919 - Boa Viagem, Recife - PE, 51020-041',
      phone: 'Telefone: (11) 30042222'
    },
    {
      postedDate: '06/05/2024',
      image: BodeDoNoLogo,
      name: 'Bode do nô',
      manufactureDate: '05/06/2024',
      expiryDate: '08/06/2024',
      quantity: '28 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: ' R. São Miguel, 1401 - Afogados, Recife - PE, 50770-720',
      phone: 'Telefone: (81) 3428-8889'
    },
    {
      postedDate: '03/05/2024',
      image: GiraffasLogo,
      name: 'Giraffas',
      manufactureDate: '01/06/2024',
      expiryDate: '09/05/2024',
      quantity: '25 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'Av. Republica Libano, 251 - Lj 3057, L3 - Pina, Recife - PE, 51110-160',
      phone: 'Telefone: 4000-1515'
    },
    {
      postedDate: '03/05/2024',
      image: BigBomprecoLogo,
      name: 'Big Bompreço',
      manufactureDate: '01/06/2024',
      expiryDate: '09/05/2024',
      quantity: '25 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: 'R. Benfica, 870 - Madalena, Recife - PE, 50720-001',
      phone: ' 0800 705 5050'
    },
    {
      postedDate: '18/05/2024',
      image: RmExpressLogo,
      name: 'RM Express',
      manufactureDate: '15/05/2024',
      expiryDate: '20/05/2024',
      quantity: '10 unidades',
      description: 'Após a data de válidade os alimentos não resgatados serão destinados a compostagem.',
      address: ' R. Paraíso, 48 - Santo Amaro, Recife - PE, 50050-520',
      phone: 'Telefone: (81) 3036-0500'
    }
  ];

  return (
    <>
      <NavBar />
      <div className={style.body}>
        <SideBar />
        <Content>
          <section className={style.Information}>
            <div className={style.Container}>
              <div className={style.imagemDivulgacoes}>
                <img src={Divulgacoes} alt="Nova Imagem" className={style.imgPrincipal} />
              </div>
              <div className={style.adicionarDoacao}>
                <button>
                  <Link to="/AddDonation" className={style.botaoCriar}>
                    <MdAddToPhotos className={style.icon} />
                    Criar
                  </Link>
                </button> 
              </div>
            </div>
            <div className={style.notificationsContainer}>
              {products.map((product, index) => (
                <div key={index} className={style.Notification}>
                  <div className={style.header}>
                    <div className={style.imgProfile}>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className={style.info}>
                      <p className={style.DataTime}>{product.postedDate}</p>
                      <h3>{product.name}</h3>
                      <p>Data de validade: {product.expiryDate}</p>
                      <p>Quantidade Disponível: {product.quantity}</p>
                    </div>
                  </div>
                  <div className={style.description}>
                    <p>{product.description}</p>
                    <button onClick={() => openModal(product)} className={style.detailsButton}>
                      Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Content>
      </div>
      {selectedProduct && (
        <ProductModal isOpen={isOpen} onClose={closeModal} product={selectedProduct} />
      )}
    </>
  );
};

export default Disclosures;