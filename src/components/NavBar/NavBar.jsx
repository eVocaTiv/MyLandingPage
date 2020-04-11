import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeSharpIcon from '@material-ui/icons/HomeRounded';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import {
  onHomeClicked,
  onVisionClicked,
  onAboutMeClicked,
  onProjectsClicked,
  onConnectClicked,
} from '@utils/commonUtils';
import styled from 'styled-components';
import '@styles/navStyles.css';

const StyledButton = styled(Button)`
  font-size: 0.5rem !important;
  & * svg {
    font-size: 1.25rem !important;
  }
`;

const EmptyDiv = styled.div`
  display: none;
`;

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 40,
    top: 0,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  customizeToolbar: {
    minHeight: 16,
    height: '15vh',
    margin: 0,
    'padding-top': 0,
    'padding-bottom': 0,
  },
}));

function NavBar(props) {
  const { isProjectPage } = props;
  const classes = useStyles();

  return (
    <AppBar
      style={{
        background: 'transparent',
        boxShadow: 'none',
      }}
      position="fixed"
    >
      <Toolbar
        style={{ position: 'relative', right: 0, top: 0 }}
        className={classes.customizeToolbar}
      >
        {/* hack for left margin */}
        <Typography className="home-button-left-container">
          <StyledButton
            onClick={onHomeClicked}
            color="inherit"
            className="nav-button"
            endIcon={<HomeSharpIcon />}
          ><EmptyDiv /></StyledButton>
        </Typography>

        <StyledButton
          onClick={onHomeClicked}
          color="inherit"
          className="home-button-right-container nav-button"
          endIcon={<HomeSharpIcon />}
        ><EmptyDiv /></StyledButton>
        {!isProjectPage && (
          <StyledButton
            onClick={onVisionClicked}
            color="inherit"
            className="nav-button"
            endIcon={<LanguageIcon />}
          >
            <div className="nav-text">Vision</div>
          </StyledButton>
        )}
        {!isProjectPage && (
          <StyledButton
            onClick={onAboutMeClicked}
            color="inherit"
            className="nav-button"
            endIcon={<AccountBoxIcon />}
          >
            <div className="nav-text">About me</div>
          </StyledButton>
        )}

        <StyledButton
          onClick={onProjectsClicked}
          color="inherit"
          className="nav-button"
          endIcon={<MenuBookIcon />}
        >
          <div className="nav-text">
            {isProjectPage ? 'Back to showcase' : 'Showcase'}
          </div>
        </StyledButton>
        {!isProjectPage && (
          <StyledButton
            onClick={onConnectClicked}
            color="inherit"
            className="nav-button"
            endIcon={
              <StyledBadge variant="dot" color="secondary">
                <PhoneIcon />
              </StyledBadge>
            }
          >
            <div className="nav-text">Get In Touch!</div>
          </StyledButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
