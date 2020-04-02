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

const StyledButton = styled(Button)`
  font-size: 0.5rem !important;
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
          ></StyledButton>
        </Typography>

        <StyledButton
          onClick={onHomeClicked}
          color="inherit"
          className="home-button-right-container nav-button"
          endIcon={<HomeSharpIcon />}
        ></StyledButton>
        {!isProjectPage && (
          <StyledButton
            onClick={onVisionClicked}
            color="inherit"
            className="nav-button"
            endIcon={<VisibilityIcon />}
          >
            <div className="nav-text">Vision</div>
          </StyledButton>
        )}
        {!isProjectPage && (
          <StyledButton
            onClick={onAboutMeClicked}
            color="inherit"
            className="nav-button"
            endIcon={<EmojiPeopleIcon />}
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
                <ContactPhoneIcon />
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
