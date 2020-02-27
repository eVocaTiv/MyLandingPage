import React, { Component } from 'react';
import TopLayer from './TopLayer';
import PropTypes from 'prop-types';

class TopLayerAsyncWrapper extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  render() {
    const { source } = this.props;
    return <TopLayer source={source} />;
  }
}

export default TopLayerAsyncWrapper;
