import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

class LoadingSpinner extends React.Component {
  render() {
    return (
      <Loader
        type="Triangle"
        color="#803966"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}

export default LoadingSpinner;
