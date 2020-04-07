import { navigate } from 'gatsby';

const onHomeClicked = () => onNavigate('/');
const onVisionClicked = () => onNavigate('/vision/');
const onAboutMeClicked = () => onNavigate('/about-me/');
const onProjectsClicked = () => onNavigate('/projects/');
const onConnectClicked = () => onNavigate('/connect/');
const homeString =
  process.env.NODE_ENV === 'development' ? 'localhost' : 'kunaldewan';

const processNavigation = (currentSection, URL) => {
  // navigate from home
  if (URL === '/') {
    // if not at home already.
    if (currentSection.indexOf(homeString) === -1) {
      document.getElementById('___gatsby').style.visibility = 'hidden';
      document.getElementById('___gatsby').style.maxHeight = 0;
      document.getElementById('___gatsby').style.overflowY = 'hidden';
      document.getElementById('___body').style.maxHeight = '100vh';
      document.getElementById('___body').style.overflowY = 'hidden';
      document.getElementById('___loader').style.display = 'flex';
      window.location.href = ('/');
    }
  } else {
    // navigate from other sections
    if (`/${currentSection}/` != URL) {
      document.getElementById('___gatsby').style.visibility = 'hidden';
      document.getElementById('___gatsby').style.maxHeight = 0;
      document.getElementById('___gatsby').style.overflowY = 'hidden';
      document.getElementById('___body').style.maxHeight = '100vh';
      document.getElementById('___body').style.overflowY = 'hidden';
      document.getElementById('___loader').style.display = 'flex';
      window.location.href = (URL);
    }
  }
};

const onNavigate = (URL) => {
  const currentURL = window.location.href;
  const currentURLArray = currentURL.split('/');
  const currentSection = currentURLArray[currentURLArray.length - 2];
  processNavigation(currentSection, URL);
};

export {
  onHomeClicked,
  onVisionClicked,
  onAboutMeClicked,
  onProjectsClicked,
  onConnectClicked,
  onNavigate,
};
