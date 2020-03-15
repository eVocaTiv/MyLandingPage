import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import theme from '@colors/theme';

const StyledButton = styled(Button)`
  &:hover {
  }
`;

const StyledCard = styled(Card)``;

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '80%',
    left: '10%',
    top: '30vh',
    height: '50vh',
    'box-shadow': '0 0 0rem 0.5rem  #895AF3',
    opacity: '0.4',
    borderRadius: '10px',
    '&:hover': {
      opacity: '0.75',
      'box-shadow': '0px 0 5rem 0px #895AF3',
      'background-color': '#392B59',
    },
    transition: 'all 0.25s ease-out',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <StyledCard className={classes.root}>
      {/* <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          dummy secondary text
        </Typography>
        <Typography variant="h5" component="h2">
          Who Am I?..
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton size="small">Learn More</StyledButton>
      </CardActions> */}
    </StyledCard>
  );
}
