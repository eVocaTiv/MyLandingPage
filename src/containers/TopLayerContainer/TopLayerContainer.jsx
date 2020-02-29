import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Player } from 'video-react';
import { NavBar, StyledSkeleton } from '@components';

const VideoContainerDiv = styled.div`
  overflow: hidden;
`;

const StyledPlayer = styled(Player)`
  //  necessary for overriding default style.
  padding-top: 0 !important;
  display: ${(props) => (props.showVideo ? 'block' : 'none')};
  > button,
  .video-react-control-bar {
    display: none;
  }
  background-color: black;
  pointer-events: none;
`;

// TODO - optimize / compress video size.
class TopLayer extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  state = {
    showNavBar: false,
    showVideo: false,
    scrolledToVisionSection: false,
  };

  componentDidMount() {
    // subscribe to player state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state) {
    const { played, readyState, duration, currentTime } = state;
    const { showVideo, showNavBar } = this.state;
    // make video visible once ready to play.
    if (!showVideo && readyState === 4) {
      this.setState({
        showVideo: true,
      });
    }

    // show navigation bar before video ends for visual effect :-) !
    if (!showNavBar && played) {
      this.setState({
        showNavBar: duration - currentTime <= 5,
      });
    }
  }

  render() {
    const { source } = this.props;
    const { showNavBar, showVideo } = this.state;

    return (
      <Fragment>
        {!showVideo && <StyledSkeleton />}
        {showNavBar && <NavBar />}
        <VideoContainerDiv>
          <StyledPlayer
            ref={(player) => {
              this.player = player;
            }}
            muted
            autoPlay
            showVideo={showVideo}
          >
            <source src={source} type="video/mp4" />
          </StyledPlayer>
        </VideoContainerDiv>
      </Fragment>
    );
  }
}

export default TopLayer;