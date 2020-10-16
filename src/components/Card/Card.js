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
            <span className="card__heading-span">An ardent</span>
            <br />
            <span className="card__heading-span">vision</span>
          </h4>
          <div className="card__data">
            <div className="card__data__prelude">
              A subtle design fused with user psychology creates a lasting impression of any product.
            </div>
            <div className="card__qoute">
              “Good design is obvious. Great design is transparent.” — Joe
              Sparano
            </div>
          </div>
        </div>
        <div className="card__side card__side--front">
          <div className="card__cta anim-smooth">
            <ScrollAnimation delay={750} animateIn="fadeIn">
              <p className="card-value card-value-heading  anim-smooth">Transcend the usual.</p>
            </ScrollAnimation>
            <ScrollAnimation delay={2000} animateIn="fadeIn">
              <p className="card-value card-value-description  anim-smooth">Know more..</p>
              </ScrollAnimation>
          </div>
        </div>  
      </div>
    );
  }
}

export default Card;
