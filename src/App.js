import React from 'react';
import './App.css';
import './Reset.css';
import { Layout } from 'antd';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar/Sidebar';

function App() {
  return (
    <Layout style={{ height: '100%' }}>
      <Sidebar />
      <Header />
    </Layout>
  );
}

export default App;
