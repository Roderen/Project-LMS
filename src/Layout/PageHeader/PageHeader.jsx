import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.scss';
import { Flex, Layout } from 'antd';

function PageHeader(props) {
  const { title, children } = props;

  return (
    <Layout className="page__header">
      <Flex align="center" gap="10px">
        {children}
        <div className="page__header-title">{title}</div>
      </Flex>
    </Layout>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageHeader;
