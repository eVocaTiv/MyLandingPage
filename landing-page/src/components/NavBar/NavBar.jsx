import React from 'react';
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

const StyledButton = materialUIStyled(withTheme(Button))((props) => ({
  '&:hover': {
    'box-shadow': '0px 0px 1px 0px #fff',
    'font-weight': 'bold',
    background: 'rgb(0,194,203)',
    background:
      'linear-gradient(45deg, rgba(0,194,203,1) 30%, rgba(82,102,204,1) 70%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
  'box-sizing': 'border-box',
  color: 'rgba(255, 255, 255, 0.5)',
  margin: '1rem 0 1rem 1.5rem',
  padding: '0.5rem 1rem',
  transition: 'color 0.25s ease-in-out',
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
  },
  customizeToolbar: {
    minHeight: 16,
    height: '15vh',
    margin: 0,
    'padding-right': '4rem',
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
          <Typography variant="h6" className={classes.title}></Typography>
          <StyledButton
            color="inherit"
            endIcon={
              <AsyncLoaderComponent
                actualComponent={
                  <Fade in={true} timeout={5000}>
                    <VisibilityIcon />
                  </Fade>
                }
              />
            }
          >
            Vision
          </StyledButton>
          <StyledButton
            color="inherit"
            endIcon={
              <AsyncLoaderComponent
                actualComponent={
                  <Fade in={true} timeout={5000}>
                    <EmojiPeopleIcon />
                  </Fade>
                }
              />
            }
          >
            About me
          </StyledButton>
          <StyledButton
            color="inherit"
            endIcon={
              <AsyncLoaderComponent
                actualComponent={
                  <Fade in={true} timeout={5000}>
                    <MenuBookIcon />
                  </Fade>
                }
              />
            }
          >
            Projects
          </StyledButton>
          <StyledButton
            color="inherit"
            endIcon={
              <AsyncLoaderComponent
                actualComponent={
                  <Fade in={true} timeout={5000}>
                    <ContactPhoneIcon />
                  </Fade>
                }
              />
            }
          >
            Get In Touch!
          </StyledButton>
        </Toolbar>
      </AppBar>
    </Fade>
  );
}

export default NavBar;
