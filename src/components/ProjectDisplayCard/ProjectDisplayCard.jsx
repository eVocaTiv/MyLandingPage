import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { onNavigate } from '@utils/commonUtils';

const useStyles = makeStyles((theme) => ({
  'will-change': 'auto',
  root: {
    display: 'flex',
  },
}));

const StyledPaper = styled(Paper)`
  // override default transition in card's child.
  position: relative;
  cursor: pointer;
  min-width: 200px !important;
  width: 35vw;
  height: 35vh;
  transition: all ease 0.5s !important;
  box-sizing: border-box;
  &:hover {
    transform: scale(1.1);
    opacity: 1;

    .project-card-overlay {
      top: 80%;
      color: #00c2cb;
      background: rgba(0, 0, 0, 0.8);
      letter-spacing: 0rem;
      font-style: normal;

      & .overlay-text--heading {
        display: none;
      }

      & .overlay-text--role {
        display: block;
        padding-top: 3%;
      }
    }
  }
  background-color: black !important;
  pointer-events: ${(props) => (props.isDisabled ? 'none' : 'all')};
`;


export default function Variants(props) {
  const classes = useStyles();

  const { children, projectURL, isDisabled } = props;
  return (
      <div className={classes.root}>
        <StyledPaper
          className="project-card"
          onClick={() => onNavigate(`/${projectURL}`)}
          elevation={10}
          variant="elevation"
          isDisabled={isDisabled}
        >
          {children}
        </StyledPaper>
      </div>
  );
}
