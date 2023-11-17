import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.scss';
import { Flex, Layout } from 'antd';
import { HomeFilled } from '@ant-design/icons';

function PageHeader(props) {
  const { title } = props;

  return (
    <Layout className="page__header">
      <Flex align="center" gap="10px">
        <HomeFilled className="page__header-icon" />
        <div className="page__header-title">{title}</div>
      </Flex>
    </Layout>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
