import React, { Component } from 'react'
import '@styles/newLandingStyles.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class NewLandingGlass extends Component {
  render() {
    return (
      <div>
        <div className="blurred-box">
        <ScrollAnimation delay={500} animateIn="fadeInRight">
          <ScrollAnimation initiallyVisible={true} delay={2000} animateIn="fadeOutLeft">
            <div className="text-immersion">Immersion</div>
          </ScrollAnimation>
          </ScrollAnimation>
          <ScrollAnimation delay={2250} animateIn="fadeIn">
            <div className="box">
              <span className="icon"></span>
              <div className="name">Kunal Dewan</div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default NewLandingGlass;