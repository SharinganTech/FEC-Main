import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <div className="flex flex-row justify-end h-[60px] bg-pastelBlack">
      <img src="./assets/logo.png" alt="" className="h-[60px] absolute left-0" />
      <FontAwesomeIcon icon={faCartShopping} className="h-[30px] mt-[15px] mr-[15px]" style={{ color: '#ffffff' }} />
      <input type="text" placeholder="Search..." className="justify-end bg-pastelBlack underline text-white right-0" />
    </div>
  );
}

export default Navigation;
