import { navigate } from 'gatsby';

const onHomeClicked = () => onNavigate('/');
const onVisionClicked = () => onNavigate('/vision/');
const onAboutMeClicked = () => onNavigate('/about-me/');
const onProjectsClicked = () => onNavigate('/projects/');
const onConnectClicked = () => onNavigate('/connect/');

const onNavigate = (URL) => {
  const currentURL = window.location.href;
  const currentURLArray = currentURL.split('/');
  console.log('here', currentURLArray);
  const currentSection = currentURLArray[currentURLArray.length - 2];
  console.log(currentSection)
  console.log(URL);
  if (`/${currentSection}/` != URL) {
    document.getElementById('___gatsby').style.opacity = 0;
    document.getElementById('___loader').style.display = 'flex';
    navigate(URL);
  }
};

export {
  onHomeClicked,
  onVisionClicked,
  onAboutMeClicked,
  onProjectsClicked,
  onConnectClicked,
  onNavigate,
};
