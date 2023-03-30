import React from 'react';

function Navigation() {
  return (
    <div className="flex flex-row h-[60px] bg-pastelBlack justify-end">
      <img src="../assets/Image_not_available.png" alt="" className="absolute left-0 h-[60px]" />
      <input type="text" placeholder="Search..." className="bg-pastelBlack underline text-white" />
    </div>
  );
}

export default Navigation;
