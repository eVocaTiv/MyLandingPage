import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const StyledPaper = styled(Paper)`
  // override default transition in card's child.
  transition: all ease 0.5s !important;
  &:hover {
   transform: scale(1.15);
   border: thick solid #00C2CB;
   box-shadow: 1px 5px 1px 1px #895AF3;
  }
  background-color: #803966;
`;

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <StyledPaper elevation={10} variant="elevation" />
    </div>
  );
}
