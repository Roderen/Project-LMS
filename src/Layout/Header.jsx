import React from 'react';

import { Flex, Layout, Typography } from 'antd';
import { FullscreenOutlined, MenuOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

const headerStyle = {
  width: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#fff',
};

const burgerButtonStyle = {
  fontSize: '20px',
};

const nameStyle = {
  marginBottom: '0', marginLeft: 'auto',
};

function Header() {
  const collapse = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <Layout.Header style={headerStyle}>
      <Flex align="middle" style={{ width: '100%', gap: '50px' }}>
        <MenuOutlined style={burgerButtonStyle} onClick={() => dispatch({ type: 'collapsed', payload: !collapse })} />
        <Typography.Paragraph style={nameStyle}>Maksym V</Typography.Paragraph>
        <FullscreenOutlined style={{ fontSize: '20px' }} />
      </Flex>
    </Layout.Header>
  );
}

export default Header;
