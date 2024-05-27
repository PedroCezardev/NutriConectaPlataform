import React from 'react';
import style from './ProductModal.module.css';

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <span>Postado em {product.postedDate}</span>
          <button className={style.closeButton} onClick={onClose}>X</button>
        </div>
        <div className={style.modalBody}>
          <img src={product.image} alt={product.name} className={style.productImage} />
          <h2>{product.name}</h2>
        </div>
        <div className={style.p}>
          <p>Data de Fabricação: {product.manufactureDate}</p>
          <p>Data de validade: {product.expiryDate}</p>
          <p>Quantidade Disponível: {product.quantity}</p>
          <h3>Retirada:</h3>
          <p>Endereço: {product.address}</p>
          <p>Telefone: {product.phone}</p>
        </div>
        <div className={style.modalFooter}>
          <button className={style.reserveButton}>Reservar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
