import React from 'react';
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const submenuItems = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

function Sidebar() {
  const collapsed = useSelector((state) => state.sidebar);

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed.isOpen}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={submenuItems}
      />
    </Layout.Sider>
  );
}

export default Sidebar;
