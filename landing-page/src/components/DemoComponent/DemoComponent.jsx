import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import LogoImage from '@components/LogoImage';
import styled from 'styled-components';

class DemoComponent extends PureComponent {
  render() {
    return (
      <div style={{ height: '100px' }}>
        <LogoImage />
      </div>
    );
  }
}

export default DemoComponent;
