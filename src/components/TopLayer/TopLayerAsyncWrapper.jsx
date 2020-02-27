import React, { Component } from 'react';
import TopLayer from './TopLayer';
import StyledSkeleton from '@components/StyledSkeleton';
import AsyncLoaderComponent from '@components/AsyncLoaderComponent';
import PropTypes from 'prop-types';

class TopLayerAsyncWrapper extends Component {

  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  render() {
    const { source } = this.props;
    return (
      <AsyncLoaderComponent
        delay={1000}
        skeleton={<StyledSkeleton />}
        actualComponent={<TopLayer source={source} />}
      />
    );
  }
}

export default TopLayerAsyncWrapper;
