// USE FOR PROJECT SPECIFIC PAGES...


import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class ParallaxWrapper extends React.Component {
  render() {
    return (
      <Parallax ref={(ref) => (this.parallax = ref)} pages={6}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#8C81A6' }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: '#803966' }}
        />
        <ParallaxLayer
          offset={3}
          speed={2}
          style={{ backgroundColor: '#392B59' }}
        />
        <ParallaxLayer
          offset={4}
          speed={3}
          style={{ backgroundColor: '#407C80' }}
        />
        <ParallaxLayer
          offset={5}
          speed={3}
          style={{ backgroundColor: '#4C4659'}}
        />
        <ParallaxLayer
          offset={0}  
          speed={0}
          factor={6}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer offset={0.2} speed={0.8} style={{ opacity: 0.6 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '55%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.55} speed={0.8} style={{ opacity: 0.4 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '65%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={0.4} style={{ opacity: 0.2 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '15%', marginLeft: '75%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '40%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '60%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '25%', marginLeft: '30%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '80%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '5%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '15%', marginLeft: '75%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.3} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '60%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '25%', marginLeft: '30%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '80%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.8} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '5%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '15%', marginLeft: '75%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4.4} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default ParallaxWrapper;
