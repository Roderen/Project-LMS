import React from 'react';
import './DashboardContainer.scss';
import PropTypes from 'prop-types';

function DashboardContainer(props) {
  const {
    title, widthContainer, children,
  } = props;

  return (
    <div className="dashboard__container" style={{ width: widthContainer }}>
      <div className="dashboard__inner">
        <div className="dashboard__container-title">{title}</div>
        {children}
      </div>
    </div>
  );
}

DashboardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  widthContainer: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DashboardContainer;
