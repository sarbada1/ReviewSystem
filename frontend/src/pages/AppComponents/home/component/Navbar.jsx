import React from 'react';
import { SearchComponent } from './Search';
import { Button, Flex } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const location = useLocation();
console.log(location);
  const isHome = location.pathname === '/'; 

  const navbarStyle = {
    color: isHome ? '#fff' : 'black',
  };
  const loginStyle = {
    color: isHome ? '#fff' : 'black',
    border:isHome?'1px solid white': '1px solid black'
  };

  return (
    <>
      <Flex wrap="wrap" gap="small" >
        <SearchComponent />
        <Button type="link" style={navbarStyle}>
          Write a review
        </Button>
        <Button ghost style={loginStyle} onClick={() => loginWithRedirect()}>
          Login
        </Button>
        <Button type="primary" danger>
          <Link to='/signin'>Signup</Link>
        </Button>
      </Flex>
    </>
  );
};
