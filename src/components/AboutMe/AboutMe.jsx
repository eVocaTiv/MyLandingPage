import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  color: white;
  border-radius: 0px;
`;

const StyledHeader = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: .5rem;
`;

const StyledBody = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  // !important necessary because of material ui card issues.
  margin: 0.5rem auto !important; 
`;

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '80%',
    left: '10%',
    top: '30vh',
    height: '65vh',
    'background-color': 'black',
    opacity: '0.1',
    '&:hover': {
      opacity: '1',
      'box-shadow': '0px 0 5rem 0px #B7A9D9',
    },
    transition: 'all 0.5s ease-out',
  },
  cardHeader: {
    ' font-family': 'Great Vibes',
    'font-size': '2rem',
    color: '#00C2CB',
  },
  cardBody: {
    'font-family': 'Allan',
    'line-height': '1.75rem',
    ' letter-spacing': ' 0.05rem',
    'font-size': '1rem',
    ' color': '#b7a9d9',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <StyledCard className={classes.root}>
      <CardContent>
        <StyledHeader
          className={classes.cardHeader}
          variant="h5"
          component="h2"
        >
          Something about me!
        </StyledHeader>
        <StyledBody className={classes.cardBody} variant="body2" component="p">
          I'm an impassioned designer &amp; programmer striving to create a
          subtle user experience. I earned my B. E. (Hons.) Computer Science from BITS
          Pilani, Goa Campus in 2019. Having explored various fields in the
          subject like Computer Networks, Compilers, Logic, Back-End
          development, Front-End development, Information Retrieval, etc., I
          became fascinated the most by human-computer interaction. Presently, I
          work at Amazon as a Front-End Engineer. A firm believer of “A great UX
          is more than what meets the eye, it resonates with the mind.”, I assay to
          provide a gratifying experience to my users. Otherwise, I'm probably
          at the gym.
          <br />
          Thank you for reading!
        </StyledBody>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
  );
}
