import { navigate } from 'gatsby';

const onHomeClicked = () => navigate('/');
const onVisionClicked = () => navigate('/vision/');
const onAboutMeClicked = () => navigate('/about-me/');
const onProjectsClicked = () => navigate('/projects/');
const onConnectClicked = () => navigate('/connect/');

export {
  onHomeClicked,
  onVisionClicked,
  onAboutMeClicked,
  onProjectsClicked,
  onConnectClicked,
};
