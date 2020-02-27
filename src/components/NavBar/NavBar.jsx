import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  styled as materialUIStyled,
  withTheme,
} from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AsyncLoaderComponent from '@components/AsyncLoaderComponent';
import HomeSharpIcon from '@material-ui/icons/HomeRounded';
import { red, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const StyledHomeIcon = materialUIStyled(withTheme(HomeSharpIcon))((props) => ({
  '@media only screen and (max-width: 1100px)': {
    display: 'none',
  },
  '&:hover': {
    color: props.theme.palette.secondary.main,
    transform: 'scale(1.1)',
    'box-shadow': '0px 0 0.5rem 0px #fff',
  },
  transition: 'transform 0.5s ease',
}));

const StyledMenuButton = materialUIStyled(withTheme(IconButton))((props) => ({
  '@media only screen and (min-width: 1100px)': {
    display: 'none',
  },
}));

const StyledButton = materialUIStyled(withTheme(Button))((props) => ({
  '@media only screen and (max-width: 1100px)': {
    display: 'none',
  },
  '&:hover': {
    transform: 'scale(1.1)',
   'backface-visibility': 'hidden',
    'box-sizing': 'border-box',
    color: props.theme.palette.primary.main,
    background:
      'linear-gradient(45deg, rgba(0,194,203,1) 30%, rgba(137,90,243,1) 70%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    'text-fill-color': 'transparent',
    'background-clip': 'text',
    'box-shadow': '0px 0 0.5rem 0px #fff',
    '& * svg': {
      opacity: 1,
    },
  },
  '& * svg': {
    opacity: 0,
  },
  margin: '1.5rem 0 1rem 0.5rem',
  'font-weight': 'bold',
  'box-sizing': 'border-box',
  color: 'rgba(255, 255, 255, 0.5 )',
  padding: '0.5rem 1rem',
  transition: 'box-shadow 0.2s ease',
  transition: 'transform 0.5s ease',
}));

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
    margin: '1.5rem 0 1rem 1.5rem',
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
    <Fade in={true} timeout={2000}>
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
          <StyledMenuButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </StyledMenuButton>
          <Typography variant="h6" className={classes.title}>
            <AsyncLoaderComponent actualComponent={<StyledHomeIcon />} />
          </Typography>
          <StyledButton color="inherit" endIcon={<VisibilityIcon />}>
            Vision
          </StyledButton>
          <StyledButton color="inherit" endIcon={<EmojiPeopleIcon />}>
            About me
          </StyledButton>
          <StyledButton color="inherit" endIcon={<MenuBookIcon />}>
            Projects
          </StyledButton>
          <StyledButton color="inherit" endIcon={<ContactPhoneIcon />}>
            Get In Touch!
          </StyledButton>
        </Toolbar>
      </AppBar>
    </Fade>
  );
}

export default NavBar;
