import React, { useEffect, useState } from 'react';
import './App.css';
import './Reset.css';
import { Layout } from 'antd';
import Icon from '@mdi/react';
import { mdiLanguageJavascript, mdiReact } from '@mdi/js';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar/Sidebar';
import Socials from './Layout/Socials/Socials';
import Dashboard from './Layout/Dashboard/Dashboard';
import CourseBoard from './Layout/CourseBoard/CourseBoard';
import PageHeader from './Layout/PageHeader/PageHeader';
import { useGetJsCourseQuery } from './store/api/api';
import DashboardContainer from './Layout/Dashboard/DashboardContainer/DashboardContainer';

function App() {
  const [dataSource, setDataSource] = useState([]);
  const { isLoading, data } = useGetJsCourseQuery();

  useEffect(() => {
    if (data) {
      setDataSource(
        data.map((item) => (
          {
            key: item.id,
            name: item.title,
            data: item.date,
            difficult: item.difficult,
          }
        )),
      );
    }
  }, [data]);

  return (
    <Layout direction="vertical" style={{ height: '100%' }}>
      <Sidebar />
      <Layout style={{ display: 'block' }}>
        <Header />
        <Layout.Content className="contentStyle">
          <Socials />
          <Dashboard />
          <DashboardContainer title="" widthContainer="100%">
            <PageHeader title="React Course">
              <div className="page__header-icon">
                <Icon path={mdiReact} size={1} />
              </div>
            </PageHeader>
            {isLoading ? <div>Loading...</div> : (<CourseBoard data={dataSource} />)}
          </DashboardContainer>
          <DashboardContainer title="" widthContainer="100%">
            <PageHeader title="JS Course">
              <div className="page__header-icon">
                <Icon path={mdiLanguageJavascript} size={1.3} />
              </div>
            </PageHeader>
            {isLoading ? <div>Loading...</div> : (<CourseBoard data={dataSource} />)}
          </DashboardContainer>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
