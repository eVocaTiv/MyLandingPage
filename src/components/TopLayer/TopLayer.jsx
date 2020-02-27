import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from '@components/NavBar';
import AsyncLoaderComponent from '@components/AsyncLoaderComponent';
import { Player, ControlBar } from 'video-react';

const VideoContainerDiv = styled.div`
  overflow: hidden;
`;

const StyledPlayer = styled(Player)`
  //  necessary for overriding default style.
  padding-top: 0 !important;
`;

// TODO - optimize / compress video size.
class TopLayer extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  state = {
    showNavBar: false,
  };

  componentDidMount() {
    // subscribe to player state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player.video.play();
  }

  // TODO: unbind to prevent memory leak at video end.
  handleStateChange(state) {
    // show navigation bar before video ends for visual effect :-) !
    if (state.played) {
      console.log('state.dur', state.duration - state.currentTime);
      this.setState({
        showNavBar: state.duration - state.currentTime <= 7,
      });
    }
  }

  render() {
    const { source } = this.props;
    const { showNavBar } = this.state;
    return (
      <Fragment>
        {showNavBar && <NavBar />}
        <VideoContainerDiv>
          <StyledPlayer
            ref={(player) => {
              this.player = player;
            }}
            muted
          >
            <source src={source} type="video/mp4" />
            <ControlBar disableCompletely={true} />
          </StyledPlayer>
        </VideoContainerDiv>
      </Fragment>
    );
  }
}

export default TopLayer;
