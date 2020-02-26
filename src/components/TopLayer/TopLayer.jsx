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

  state = {
    isVideoReady: false,
  }

  showNavBar = () => {
    var vid = document.getElementById('intro-video');
    vid.onplay = function() {
      alert('The video is now playing');
    };
  };

  // borrow from stack overflow
  checkforVideo = () => {
    let vid;
    //Every 500ms, check if the video element has loaded
    var b = setInterval(() => {
      vid = document.getElementById('intro-video');
      console.log('checking for video..!');
      console.log('vid', vid);
      console.log('vid.readyState', vid.readyState);
      if (vid && vid.readyState >= 3) {
        //your code goes here
        //stop checking every half second
        console.log('video is ready!');
        clearInterval(b);
        console.log('video ready!');
        this.setState({
          isVideoReady: true,
        })
      }
    }, 200);
  };

  render() {
    const { source } = this.props;
    // const { isVideoReady } = this.state;
    // if (!isVideoReady)
    //   return 'Still Loading..';
    return (
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
          >
            <source src={source} type="video/mp4" />
          </video>
        </VideoContainerDiv>
      </Fragment>
    );
  }
}

export default TopLayer;
