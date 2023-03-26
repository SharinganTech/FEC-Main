import React from 'react';

function Navigation() {
  return (
    <div className="flex flex-row h-[75px] bg-pastelPurple">
      <img src="../assets/Image_not_available.png" alt="" className="object-contain justify-self-start" />
      <input type="text" placeholder="Search..." className="justify-self-end bg-pastelPurple underline text-white" />
    </div>
  );
}

export default Navigation;
