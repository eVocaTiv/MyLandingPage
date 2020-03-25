import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  'will-change': 'auto',
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
  cursor: pointer;
  min-width: 200px !important;
  width: 35vw !important;
  transition: all ease 0.5s !important;
  box-sizing: border-box;
  &:hover {
    transform: scale(1.15);
    border: thick solid #00c2cb;
    box-shadow: 1px 5px 1px 1px #895af3;
  }
  background-color: #803966 !important;
`;

export default function Variants(props) {
  const classes = useStyles();
  const { children, projectTitle } = props;
  return (
    <div className={classes.root}>
      <Tooltip title={projectTitle}>
        <StyledPaper elevation={24} variant="elevation">
          {children}
        </StyledPaper>
      </Tooltip>
    </div>
  );
}
