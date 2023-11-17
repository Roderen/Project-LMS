import React from 'react';
import './App.css';
import './Reset.css';
import { Layout } from 'antd';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar/Sidebar';
import Socials from './Layout/Socials/Socials';
import Dashboard from './Layout/Dashboard/Dashboard';

function App() {
  return (
    <Layout direction="vertical" style={{ height: '100%' }}>
      <Sidebar />
      <Layout style={{ display: 'block' }}>
        <Header />
        <Layout.Content className="contentStyle">
          <Socials />
          <Dashboard />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
