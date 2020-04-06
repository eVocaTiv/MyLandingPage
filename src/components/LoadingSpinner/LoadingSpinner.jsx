import React from 'react';
import { css } from '@emotion/core';
import ScaleLoader from 'react-spinners/ScaleLoader';

const override = css`
  display: none;
  margin: 0 auto;
`;

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className="sweet-loading">
        <ScaleLoader css={override} size={150} color={'#00C2CB'} loading />
      </div>
    );
  }
}

export default LoadingSpinner;
