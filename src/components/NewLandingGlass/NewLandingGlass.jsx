import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

class NewLandingGlass extends Component {
  render() {
    return (
      <div>
        <div className="blurred-box">
          <ScrollAnimation delay={500} animateIn="fadeInRight">
            <ScrollAnimation
              initiallyVisible={true}
              delay={2000}
              animateIn="fadeOutLeft"
            >
              <div className="text-immersion">Immersion</div>
            </ScrollAnimation>
          </ScrollAnimation>
          <div className="box">
            <span className="icon"></span>
            <ScrollAnimation delay={2250} animateIn="flip">
              <div className="name">Kunal Dewan</div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default NewLandingGlass;