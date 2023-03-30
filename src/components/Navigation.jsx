import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <div className="flex flex-row justify-end h-[80px] bg-pastelBlack">
      <img src="./assets/BoldFontLogo.png" alt="" className="h-[80px] absolute left-0" />
      <input type="text" placeholder="Search..." className="justify-end bg-pastelBlack underline text-white right-0" />
      <FontAwesomeIcon icon={faCartShopping} className="h-[30px] mt-[15px] mr-[25px]" style={{ color: '#ffffff' }} />
    </div>
  );
}

export default Navigation;
