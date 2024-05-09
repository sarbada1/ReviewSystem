import React from 'react';
import { Carousel } from 'antd';
import { Navbar } from './Navbar';

const carouselContainerStyle = {
  position: 'relative',
  height: '680px',
  margin: '0px',
  padding: '0px',
};

const contentStyle = {
  height: '660px',
  color: '#fff',
  lineHeight: '160px',
  // textAlign: 'center',
  background: '#364d79',
};

const navbarStyle = {
  position: 'absolute',
  top: '40px',
  left: '5%',
  zIndex: '999',
  width:'100%'
};

const imgStyle = {
  width: '100%', // Set width to 100%
  height: '100%', // Set height to 100%
};

export default function Banner() {
  return (
    <div style={carouselContainerStyle}>
      <div style={navbarStyle}>
        <Navbar />
      </div>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <img src="/images/banner4.jpg" alt="" style={imgStyle} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src="/images/banner5.jpg" alt="" style={imgStyle} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
          <img src="/images/banner6.jpg" alt="" style={imgStyle} />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
