import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import ProductContext from '../../contexts/ProductContext';

function Modal({ relatedItem, modal, setModal }) {
  const product = useContext(ProductContext);
  const prodDes = { product };
  const prod = prodDes.product;
  console.log('Overview Product', prod);
  console.log('Selected Product', relatedItem);

  return (
    <div>
      Place Holder
      <button
        type="button"
        onClick={() => {
          setModal(!modal);
        }}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
}

export default Modal;
