import React, { Component } from 'react';
import { ProjectContainer } from '@containers';
import UXImage1 from '@components/Images/ProjectDetailsImages/UXImage1';
import UXImage2 from '@components/Images/ProjectDetailsImages/UXImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Project extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return (
      <ProjectContainer
        TopImage={<UXImage1 />}
        BottomImage={<UXImage2 />}
        ProjectDescription="These designs started out of interest when I completed a few courses on UX principles
        and design tools. By completing them I have expanded my knowledge tremendously and wish to make the next
        projects even better. Currently I'm teaching myself Photoshop to enhance my visual design skills and 
        diving deep into user research through case studies."
        FooterImage={
          <FooterImage adobeURL="https://dewan.design" />
        }
        isMoreSpaced={'large'}
      />
    );
  }
}

export default Project;
