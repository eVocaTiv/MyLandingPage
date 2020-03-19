import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    'font-size': '1rem',
    color: '#b7a9d9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    // !important necessary because of material ui card issues.
    margin: '1.5rem auto !important',
    'box-shadow': '0px 0px 1rem 0px #00C2CB',
    opacity: '0',
    '&:hover': {
      'background-color': 'black',
      opacity: '0.8',
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

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.cardHeader} variant="h5" component="h2">
          <ScrollAnimation
            delay={500}
            initiallyVisible={false}
            animateIn="flash"
          >
            Something about me &#8623;
          </ScrollAnimation>
        </div>
        <div className={classes.cardBody} variant="body2" component="p">
          <StyledBodyText>
            I'm an impassioned designer &amp; programmer striving to create a
            subtle user experience. I earned my B. E. (Hons.) Computer Science
            from BITS Pilani, Goa Campus in 2019. Having explored various fields
            in the subject like Computer Networks, Compilers, Logic, Back-End
            development, Front-End development, Information Retrieval, etc., I
            became fascinated the most by human-computer interaction. Presently,
            I work at Amazon as a Front-End Engineer. A firm believer of “A
            great UX is more than what meets the eye, it resonates with the
            mind.”, I assay to provide a gratifying experience to my users.
            Otherwise, I'm probably at the gym.
            <br />
            Thank you for reading!
          </StyledBodyText>
        </div>
      </CardContent>
    </Card>
  );
}
