import React from 'react';
import Banner from '../pages/AppComponents/home/component/Banner';
import { Navbar } from '../pages/AppComponents/home/component/Navbar';

const navbarStyle = {
  position: 'absolute',
  top: '40px',
  left: '5%',
  zIndex: '999',
  width:'100%'
};

const hrStyle = {
  marginTop: '90px', // Adjust margin top as needed
  width: '100%', // Make the <hr> take full width
  border: 'none',
  borderTop: '1px solid #ccc', // Example border style, adjust as needed
};

export default function HeaderComponent() {
  return (
    <>
      <div style={navbarStyle}>
        <Navbar />
      </div>
        <hr style={hrStyle} />
    </>
  );
}
