import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
<<<<<<< HEAD
    <div className="flex flex-row h-[60px] bg-pastelBlack justify-end">
      <img src="../assets/Image_not_available.png" alt="" className="absolute left-0 h-[60px]" />
      <input type="text" placeholder="Search..." className="bg-pastelBlack underline text-white" />
=======
    <div className="flex flex-row justify-end h-[60px] bg-pastelBlack">
      <img src="./assets/logo.png" alt="" className="h-[60px] absolute left-0" />
      <input type="text" placeholder="Search..." className="justify-end bg-pastelBlack underline text-white right-0" />
      <FontAwesomeIcon icon={faCartShopping} className="h-[30px] mt-[15px] mr-[25px]" style={{ color: '#ffffff' }} />
>>>>>>> main
    </div>
  );
}

export default Navigation;
