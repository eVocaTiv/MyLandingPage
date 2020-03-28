import { navigate } from 'gatsby';

const onHomeClicked = () => onNavigate('/');
const onVisionClicked = () => onNavigate('/vision');
const onAboutMeClicked = () => onNavigate('/about-me');
const onProjectsClicked = () => onNavigate('/projects');
const onConnectClicked = () => onNavigate('/connect');

const onNavigate = (URL) => {
  document.getElementById('___gatsby').style.opacity = 0;
  document.getElementById('___loader').style.display = 'flex';
  navigate(URL);
};

export {
  onHomeClicked,
  onVisionClicked,
  onAboutMeClicked,
  onProjectsClicked,
  onConnectClicked,
  onNavigate,
};
