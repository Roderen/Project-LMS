import React, { useEffect, useState } from 'react';
import './App.css';
import './Reset.css';
import { Flex, Layout } from 'antd';
import Icon from '@mdi/react';
import { mdiLanguageJavascript, mdiReact, mdiVideo } from '@mdi/js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
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

  const videosForSlider = [
    'https://www.youtube.com/embed/7wtfhZwyrcc?si=DeMTOzdAJKwuHeTM',
    'https://www.youtube.com/embed/7wtfhZwyrcc?si=DeMTOzdAJKwuHeTM',
    'https://www.youtube.com/embed/7wtfhZwyrcc?si=DeMTOzdAJKwuHeTM',
    'https://www.youtube.com/embed/7wtfhZwyrcc?si=DeMTOzdAJKwuHeTM',
    'https://www.youtube.com/embed/7wtfhZwyrcc?si=DeMTOzdAJKwuHeTM',
  ];

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
          <DashboardContainer title="" widthContainer="100%">
            <PageHeader title="Полезные видео">
              <div className="page__header-icon">
                <Icon path={mdiVideo} size={1.3} />
              </div>
            </PageHeader>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <Flex>
                {videosForSlider.map((item) => (
                  <SwiperSlide>
                    <iframe
                      width="100%"
                      height="250"
                      src={item}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </SwiperSlide>
                ))}
                ;
              </Flex>
            </Swiper>
          </DashboardContainer>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
