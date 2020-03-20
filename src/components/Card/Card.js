import React, { Component } from 'react';
import CardImage from '@components/Images/CardImage';
import ScrollAnimation from 'react-animate-on-scroll';
import '@styles/cardStyles.css';

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
            <div className="card__data__prelude">
              A spark of vivified design fused with user psychology animates the
              lacklustre semblance of otherwise drab code.
            </div>
            <div className="card__qoute">
              “Good design is obvious. Great design is transparent.” — Joe
              Sparano
            </div>
          </div>
        </div>
        <div className="card__side card__side--front">
          <div className="card__cta">
            <ScrollAnimation  delay={750} animateIn="fadeIn">
              <p className="card-value">Transcend the usual.</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
