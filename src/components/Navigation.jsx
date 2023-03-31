import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navigation({ itemsTotal }) {
  return (
    <div className="flex flex-row justify-end h-[80px] bg-pastelBlack">
      <img src="./assets/BoldFontLogo.png" alt="" className="h-[80px] absolute left-0" />
      <input type="text" placeholder="Search..." className="justify-end bg-pastelBlack underline text-white right-0" />
      <div>
        <p className="absolute h-[30px] mt-[12px] ml-[15px]">{itemsTotal}</p>
        <FontAwesomeIcon icon={faCartShopping} className="h-[30px] mt-[15px] mr-[25px]" style={{ color: '#ffffff' }} />
      </div>
    </div>
  );
}

export default Navigation;
