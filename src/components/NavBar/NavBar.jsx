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

const StyledHomeIcon = materialUIStyled(withTheme(HomeSharpIcon))((props) => ({
  '&:hover': {
    color: props.theme.palette.secondary.main,
    transform: 'translate(0.1rem)',
    'box-shadow': '0px 0 0.5rem 0px #fff',
  },
  transition: 'transform 0.5s ease',
}));

const StyledButton = materialUIStyled(withTheme(Button))((props) => ({
  '&:hover': {
    transform: 'translate(0.1rem)',
    color: props.theme.palette.primary.main,
    background:
      'linear-gradient(45deg, rgba(0,194,203,1) 30%, rgba(137,90,243,1) 70%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    'box-shadow': '0px 0 0.5rem 0px #fff',
    '& * svg': {
      opacity: 1,
    },
  },
  '& * svg': {
    opacity: 0,
  },
  'font-weight': 'bold',
  'box-sizing': 'border-box',
  color: 'rgba(255, 255, 255, 0.5 )',
  margin: '1rem 0 1rem 1.5rem',
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
          style={{ position: 'relative', right: 0 }}
          className={classes.customizeToolbar}
        >
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
