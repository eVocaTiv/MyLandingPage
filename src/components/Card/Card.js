import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__side card__side--back">
          <div className="card__picture">&nbsp;</div>
          <h4 className="card__heading">
            <span className="card__heading-span">
              A messianic
            </span>
            <br />
            <span className="card__heading-span">
              touch
            </span>
          </h4>
        </div>
        <div className="card__side card__side--front">
          <div className="card__cta">
            <p className="card-value">It's not the same.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
