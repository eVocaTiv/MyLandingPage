import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '80%',
    left: '10%',
    top: '15vh',
    height: '65vh',
    'background-color': 'transparent',
  },
  cardHeader: {
    ' font-family': 'Great Vibes',
    'font-size': '2rem',
    color: '#00C2CB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  cardBody: {
    'font-family': 'Allan',
    'line-height': '1.75rem',
    ' letter-spacing': ' 0.05rem',
    'font-size': '1.15rem',
    color: '#B7A9D9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    // !important necessary because of material ui card issues.
    margin: '0rem auto !important',
    'box-shadow': '0px 0px 1rem 0px #00C2CB',
    opacity: '0.9',
    'background-color': 'black',
    '&:hover': {
      'background-color': 'transparent',
      opacity: '0.2',
    },
    transition: 'opacity 0.5s ease-in-out',
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
`;

export default function AboutMeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.cardHeader} variant="h5" component="h2">
          <ScrollAnimation
            delay={750}
            initiallyVisible={false}
            animateIn="flash"
          >
            Something about me &#8623;
          </ScrollAnimation>
        </div>
        <ScrollAnimation delay={500} initiallyVisible={false} animateIn="fadeIn">
          <div className={classes.cardBody} variant="body2" component="p">
            <StyledBodyText>
              I'm an impassioned designer &amp; programmer striving to create a
              lucid user experience. Having completed my B. E. (Hons.) Computer
              Science from BITS Pilani, Goa Campus in 2019, I became fascinated
              the most by Human-Computer Interaction. Presently, I work at
              Amazon as a Front-End Engineer where I solve customer problems
              observing a 'user-friendly' fashion. A firm believer of “A great
              UX is more than what meets the eye, it resonates with the mind.”,
              I assay to furnish a gratifying experience to my users. Otherwise,
              I'm probably at the gym.
              <br />
              Thank you for reading!
            </StyledBodyText>
          </div>
        </ScrollAnimation>
      </CardContent>
    </Card>
  );
}