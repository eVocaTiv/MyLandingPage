import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from '@components/NavBar';
import { Player } from 'video-react';
import StyledSkeleton from '@components/StyledSkeleton';

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
`;

// TODO - optimize / compress video size.
class TopLayer extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  state = {
    showNavBar: false,
    showVideo: false,
  };

  componentDidMount() {
    // subscribe to player state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state) {
    const { played, readyState, duration, currentTime, ended } = state;

    // make video visible once ready to play.
    if (readyState === 4) {
      this.setState({
        showVideo: true,
      });
    }

    // show navigation bar before video ends for visual effect :-) !
    if (played) {
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
            <source src={source} />
          </StyledPlayer>
        </VideoContainerDiv>
      </Fragment>
    );
  }
}

export default TopLayer;
