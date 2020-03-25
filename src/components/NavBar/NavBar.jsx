import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeSharpIcon from '@material-ui/icons/HomeRounded';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
  title: {
    flexGrow: 1,
    'box-sizing': 'border-box',
    color: 'rgba(255, 255, 255, 0.5)',
    margin: '2rem 0 1rem 1.5rem',
    padding: '0.5rem 1rem',
  },
  customizeToolbar: {
    minHeight: 16,
    height: '15vh',
    margin: 0,
    'padding-top': 0,
    'padding-bottom': 0,
  },
}));

function NavBar() {
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
        <Button
          edge="start"
          className="menu-button"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </Button>
        <Typography variant="h6" className={classes.title}>
          <HomeSharpIcon className="home-button" onClick={onHomeClicked} />
        </Typography>
        <Button
          onClick={onVisionClicked}
          color="inherit"
          className="nav-button"
          endIcon={<VisibilityIcon />}
        >
          Vision
        </Button>
        <Button
          onClick={onAboutMeClicked}
          color="inherit"
          className="nav-button"
          endIcon={<EmojiPeopleIcon />}
        >
          About me
        </Button>
        <Button
          onClick={onProjectsClicked}
          color="inherit"
          className="nav-button"
          endIcon={<MenuBookIcon />}
        >
          Showcase
        </Button>
        <Button
          onClick={onConnectClicked}
          color="inherit"
          className="nav-button"
          endIcon={
            <StyledBadge variant="dot" color="secondary">
              <ContactPhoneIcon />
            </StyledBadge>
          }
        >
          Get In Touch!
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
