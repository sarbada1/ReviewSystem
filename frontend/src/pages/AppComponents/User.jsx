import React, { useState } from 'react';
import { Card, Menu } from 'antd';

const items = [
  {
    key: '11',
    label: 'Option 1',
  },
  {
    key: '12',
    label: 'Option 2',
  },
  {
    key: '13',
    label: 'Option 3',
  },
  {
    key: '14',
    label: 'Option 4',
  }
];

const imgStyle = {
  borderRadius: "50%",
  height: "100px",
  width: "100px",
  border: "1px solid red"
};

const User = () => {
  const [openKeys, setOpenKeys] = useState(['2', '23']);

  const onOpenChange = (newOpenKeys) => {
    const currentOpenKey = newOpenKeys.find(key => !openKeys.includes(key));
    if (currentOpenKey !== undefined) {
      const repeatIndex = newOpenKeys.findIndex(key => key !== currentOpenKey && items.some(item => item.key === key));
      setOpenKeys(
        newOpenKeys
          .filter((_, index) => index !== repeatIndex)
          .filter(key => items.some(item => item.key === key)),
      );
    } else {
      setOpenKeys(newOpenKeys);
    }
  };

  return (
    <>
      <Card
        style={{
          width: 250,
          marginTop: '50px',
          marginLeft: '50px',
        }}
      >
        <div className='profile'>
          <img style={imgStyle} src="/images/banner1.webp" alt="" />
          <h3>Kelly A.</h3>
          <p>Brigadoon, San jose, CA </p>
          <button>Add friend</button>
        </div>
      </Card>

      <Menu
        mode="inline"
        defaultSelectedKeys={['231']}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 256,marginLeft: '50px' }}
        items={items}
      />
    </>
  );
};

export default User;
