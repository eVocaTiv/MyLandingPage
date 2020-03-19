import React, { Component } from 'react';
import CardImage from '@components/Images/CardImage';
import ScrollAnimation from 'react-animate-on-scroll';

class Card extends Component {
  render() {
    return (
      <div id="vision-card" className="card">
        <div className="card__side card__side--back">
          <CardImage />
          <h4 className="card__heading">
            <span className="card__heading-span">A messianic</span>
            <br />
            <span className="card__heading-span">touch</span>
          </h4>
          <div className="card__data">
            A schematic design furnishes a fluid user experience. I believe that
            understanding human psychology is the key to the same &amp;
            endeavour to unveil it with my tenacity.
            <div className="card__qoute">
              “Good design is obvious. Great design is transparent.” — Joe
              Sparano
            </div>
          </div>
        </div>
        <div className="card__side card__side--front">
          <div className="card__cta">
            <ScrollAnimation duration={0.25} animateIn="fadeIn">
              <p className="card-value">Transcend the usual.</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
