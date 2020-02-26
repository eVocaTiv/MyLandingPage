import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from '@components/NavBar';
import AsyncLoaderComponent from '@components/AsyncLoaderComponent';
import StyledSkeleton from '@components/StyledSkeleton';

const VideoContainerDiv = styled.div`
  overflow: hidden;
`;

// TODO - optimize / compress video size.
class TopLayer extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  state = {
    isVideoReady: false,
  };

  render() {
    const { source } = this.props;
    return (
      <AsyncLoaderComponent
        delay={1000}
        skeleton={<StyledSkeleton />}
        actualComponent={
          <Fragment>
            <AsyncLoaderComponent delay={2000} actualComponent={<NavBar />} />
            <VideoContainerDiv>
              <video
                id="intro-video"
                style={{
                  objectFit: 'cover',
                  width: '100vw',
                  height: '100vh',
                }}
                onLoad={console.log('video loaded.')}
                preload={'auto'}
                muted
                autoPlay
                controls
              >
                <source src={source} type="video/mp4" />
              </video>
            </VideoContainerDiv>
          </Fragment>
        }
      />
    );
  }
}

export default TopLayer;
