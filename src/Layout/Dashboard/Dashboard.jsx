import React from 'react';
import './Dashboard.scss';
import { Flex } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import PageHeader from '../PageHeader/PageHeader';
import DashboardContainer from './DashboardContainer/DashboardContainer';
import DoughnutChart from '../../Components/Charts/DoughnutChart/DoughnutChart';
import HorizontalChart from '../../Components/Charts/HorizontalChart/HorizontalChart';

function Dashboard() {
  return (
    <div className="dashboard">
      <PageHeader title="Дашборд">
        <HomeFilled className="page__header-icon" />
      </PageHeader>
      <div className="dashboard__inner">
        <Flex align="stretch" justify="space-between" gap="40px">
          <DashboardContainer title="Качество выполнения ДЗ" widthContainer="33.3333%">
            <DoughnutChart />
          </DashboardContainer>
          <DashboardContainer title="Рейтинг по курсу" widthContainer="66.6666%">
            <HorizontalChart />
          </DashboardContainer>
        </Flex>
      </div>
    </div>
  );
}

export default Dashboard;
