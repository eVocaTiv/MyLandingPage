import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import myPhoto from '@styles/newDp.jpg';
class NewLandingGlass extends Component {
  render() {
    return (
      <div>
        <div className="blurred-box">
          <div className="box"></div>
        </div>
        <div className="photo">
          <h1>Kunal Dewan</h1>
          <img src={myPhoto}></img>
          <div className="glow-wrap">
            <i className="glow"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default NewLandingGlass;
