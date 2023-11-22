import React from 'react';
import './DashboardContainer.scss';
import PropTypes from 'prop-types';

function DashboardContainer(props) {
  const {
    title, widthContainer, children,
  } = props;

  const dashboardContainerStyle = {
    maxWidth: widthContainer,
    flex: `1 1 ${widthContainer}`,
  };

  return (
    <div className="dashboard__container" style={dashboardContainerStyle}>
      <div className="dashboard__container-title">{title}</div>
      {children}
    </div>
  );
}

DashboardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  widthContainer: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DashboardContainer;
