import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import { onNavigate } from '@utils/commonUtils';

const useStyles = makeStyles((theme) => ({
  'will-change': 'auto',
  root: {
    display: 'flex',
  },
}));

const StyledPaper = styled(Paper)`
  // override default transition in card's child.
  cursor: pointer;
  min-width: 200px !important;
  width: 35vw !important;
  height: 17.5vh !important;
  transition: all ease 0.5s !important;
  box-sizing: border-box;
  background-blend-mode: hue;
  &:hover {
    transform: rotate(3deg) scale(1.15);
    box-shadow: 5px 5px 15px 1px #00C2CB;
    margin: 0.5rem;
  }
  background-color: #803966 !important;
  pointer-events: ${props => props.isDisabled ? "none" : "all"} !important;
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

  const { children, projectTitle, projectURL, isDisabled } = props;
  return (
    <Tooltip
      TransitionComponent={Fade}
      placement="top"
      TransitionProps={{ timeout: 600 }}
      arrow
      classes={toolTipClasses}
      title={projectTitle}
    >
      <div className={classes.root}>
        <StyledPaper
          onClick={() => onNavigate(`/${projectURL}`)}
          elevation={24}
          variant="elevation"
          isDisabled={isDisabled}
        >
          {children}
        </StyledPaper>
      </div>
    </Tooltip>
  );
}
