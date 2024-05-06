import React from 'react';
import { SearchComponent } from './Search';
import { Logo } from './Logo';
import { Button, Flex } from 'antd';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


export const Navbar = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    <Logo/>
      <Flex wrap="wrap" gap="small">
        <SearchComponent />
        <Button type="link" style={{color: '#fff' }}>
          Write a review
        </Button>
        
        <Button ghost style={{ border: '1px solid white',color: '#fff' }}  onClick={() => loginWithRedirect()}>
         Login
        </Button>
        <Button type="primary" danger>
        <Link to='/signin'>Signup</Link> 
        </Button>
      </Flex>
    </>
  );
};
