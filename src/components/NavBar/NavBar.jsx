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
import HomeSharpIcon from '@material-ui/icons/HomeRounded';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AsyncLoaderComponent } from '@components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Constants from '@constants';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledHomeIcon = materialUIStyled(withTheme(HomeSharpIcon))((props) => ({
  '@media only screen and (max-width: 1100px)': {
    display: 'none',
  },
  '&:hover': {
    color: props.theme.palette.common.light,
    transform: 'scale(1.1)',
    'box-shadow': '0px 0 0.5rem 0px #fff',
  },
  transition: 'transform 0.5s ease',
  cursor: 'pointer',
  fontSize: '1.75rem',
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
    '-webkit-backface-visibility': 'hidden',
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
  'font-family': props.theme.fonts.primary,
  'font-weight': 'bold',
  'box-sizing': 'border-box',
  color: 'rgba(255, 255, 255, 0.5 )',
  padding: '0.5rem 1rem',
  transition: 'box-shadow 0.2s ease',
  //eslint-disable-next-line
  transition: 'transform 0.5s ease',
}));

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
  const {
    home,
    visionSection,
    aboutMeSection,
    footer,
    projectDisplay,
  } = Constants.anchorIds;
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
            <AsyncLoaderComponent
              actualComponent={
                <StyledHomeIcon onClick={() => scrollTo(`#${home}`)} />
              }
            />
          </Typography>
          <StyledButton
            onClick={() => scrollTo(`#${visionSection}`)}
            color="inherit"
            endIcon={<VisibilityIcon />}
          >
            Vision
          </StyledButton>
          <StyledButton
            onClick={() => scrollTo(`#${aboutMeSection}`)}
            color="inherit"
            endIcon={<EmojiPeopleIcon />}
          >
            About me
          </StyledButton>
          <StyledButton
            onClick={() => scrollTo(`#${projectDisplay}`)}
            color="inherit"
            endIcon={<MenuBookIcon />}
          >
            Projects
          </StyledButton>
          <StyledButton
            onClick={() => scrollTo(`#${footer}`)}
            color="inherit"
            endIcon={
              <StyledBadge variant="dot" color="secondary">
                <ContactPhoneIcon />
              </StyledBadge>
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
