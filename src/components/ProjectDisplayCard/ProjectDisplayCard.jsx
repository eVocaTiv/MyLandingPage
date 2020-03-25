import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  'will-change': 'auto',
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      padding: theme.spacing(2),
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
    transform: scale(1.05);
    box-shadow: 1px 5px 5px 1px #803966;
    padding: 0;
  }
  background-color: #803966 !important;
`;
const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function Variants(props) {
  const classes = useStyles();
  const toolTipClasses = useStylesBootstrap();

  const { children, projectTitle, placement } = props;
  return (
    <Tooltip
      TransitionComponent={Fade}
      placement={placement}
      TransitionProps={{ timeout: 600 }}
      arrow
      classes={toolTipClasses}
      title={projectTitle}
    >
      <div className={classes.root}>
        <StyledPaper elevation={24} variant="elevation">
          {children}
        </StyledPaper>
      </div>
    </Tooltip>
  );
}
