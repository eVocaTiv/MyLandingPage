import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '15vh',
    'background-color': 'transparent',
  },
  cardHeader: {
    'text-align': 'center',
    'font-family': 'Great Vibes',
    'font-size': '2.25rem',
    color: '#00C2CB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  cardBody: {
    'font-family': 'Montserrat',
    'font-style': 'italic',
    'line-height': '1.75rem',
    'letter-spacing': ' 0.05rem',
    'font-size': '0.9rem',
    'font-weight': 'bold',
    color: '#B7A9D9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    // !important necessary because of material ui card issues.
    'box-shadow': '0px 0px 1rem 0px #00C2CB',
    margin: '0rem auto !important',
    'background-color': 'rgba(0,0,0,0.5)',
    transition: 'all 0.5s ease',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// LAG ISSUES EXIST W/ gatsby.
const StyledBodyText = styled.div`
  padding: 1rem;
  text-align: justify;
`;

export default function AboutMeCard() {
  const classes = useStyles();

  return (
    <Card elevation={0} variant="elevation" className={classes.root}>
      <CardContent>
        <div className={classes.cardHeader} variant="h5" component="h2">
          <ScrollAnimation
            delay={750}
            initiallyVisible={false}
            animateIn="fadeIn"
          >
            Something about me
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          delay={1750}
          initiallyVisible={false}
          animateIn="fadeIn"
        >
          <div
            id="about-me-card"
            className={classes.cardBody}
            variant="body2"
            component="p"
          >
            <StyledBodyText>
              I'm an impassioned programmer and a budding designer, striving to create a
              lucid user experience. Having completed my B. E. (Hons.) Computer
              Science from BITS Pilani, Goa Campus in 2019, and a few internships, I became fascinated
              the most by Human-Computer Interaction and User Experience. Presently, I work at
              Amazon as a Front-End Engineer where I solve user problems
              via thorough research, design and programming. I firmly believe that great
              UX resonates with the mind and hence,
              I thrive to be cognizant of the users' needs and intuitive designs.
              <br />
              Thank you for reading!
            </StyledBodyText>
          </div>
        </ScrollAnimation>
      </CardContent>
    </Card>
  );
}
