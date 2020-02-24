import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from '@components/NavBar';
import AsyncLoaderComponent from '@components/AsyncLoaderComponent';

const VideoContainerDiv = styled.div`
  overflow: hidden;
`;

// TODO - optimize / compress video size.
class TopLayer extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  render() {
    const { source } = this.props;
    return (
      <Fragment>
        <AsyncLoaderComponent delay={2000} actualComponent={<NavBar />} />
        <VideoContainerDiv>
          <video
            style={{
              objectFit: 'cover',
              width: '100vw',
              height: '100vh',
            }}
            muted
            autoPlay
          >
            <source src={source} type="video/mp4" />
          </video>
        </VideoContainerDiv>
      </Fragment>
    );
  }
}

export default TopLayer;
