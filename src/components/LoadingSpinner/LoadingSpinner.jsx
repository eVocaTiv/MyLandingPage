import React from 'react';
import { css } from '@emotion/core';
import RingLoader from 'react-spinners/RingLoader';

const override = css`
  display: block;
  margin: 0 auto;
`;

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className="sweet-loading">
        <RingLoader css={override} size={150} color={'#00C2CB'} loading />
      </div>
    );
  }
}

export default LoadingSpinner;
