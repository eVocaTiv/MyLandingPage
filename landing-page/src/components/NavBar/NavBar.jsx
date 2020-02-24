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

const StyledButton = materialUIStyled(withTheme(Button))((props) => ({
  '&:hover': {
    color: props.theme.palette.common.light,
    // 'text-shadow': '5px 20px 4px props.theme.palette.primary.main',
  },
  color: 'rgba(255, 255, 255, 0.5)',
  margin: '1rem 0 1rem 3rem',
  'text-shadow': '5px 20px 4px #fff',
  transition: ' all 0.25s ease-out',
}));

// borrowed from google material-ui docs.
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
          <StyledButton color="inherit">About me</StyledButton>
          <StyledButton color="inherit">Projects</StyledButton>
          <StyledButton color="inherit">Get In Touch!</StyledButton>
        </Toolbar>
      </AppBar>
    </Fade>
  );
}

export default NavBar;
