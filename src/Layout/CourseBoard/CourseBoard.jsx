import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import PageHeader from '../PageHeader/PageHeader';

function CourseBoard(props) {
  const { data, children } = props;

  const columns = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Дата',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: 'Сложность',
      dataIndex: 'difficult',
      key: 'difficult',
    },
  ];

  return (
    <>
      {children}
      <Table dataSource={data} columns={columns} />
    </>
  );
}

PageHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    name: PropTypes.string,
    data: PropTypes.number,
    difficult: PropTypes.number,
  })).isRequired,
  children: PropTypes.node.isRequired,
};

export default CourseBoard;
