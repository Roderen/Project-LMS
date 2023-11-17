import React from 'react';
import './Dashboard.scss';
import { Flex, Layout } from 'antd';
import PageHeader from '../PageHeader/PageHeader';
import DashboardContainer from './DashboardContainer/DashboardContainer';
import DoughnutChart from '../../Components/Charts/DoughnutChart/DoughnutChart';
import HorizontalChart from '../../Components/Charts/HorizontalChart/HorizontalChart';

function Dashboard() {
  return (
    <Layout>
      <PageHeader title="Дашборд" />
      <div className="dashboard__wrapper">
        <Flex align="stretch" justify="space-between" gap="40px">
          <DashboardContainer title="Качество выполнения ДЗ" widthContainer="30%">
            <DoughnutChart />
          </DashboardContainer>
          <DashboardContainer title="Рейтинг по курсу" widthContainer="100%">
            <HorizontalChart />
          </DashboardContainer>
        </Flex>
      </div>
    </Layout>
  );
}

export default Dashboard;
