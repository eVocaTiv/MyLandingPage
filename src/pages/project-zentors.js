import React, { Component } from 'react';
import { ProjectContainer } from '@containers';
import ZentorsImage1 from '@components/Images/ProjectDetailsImages/ZentorsImage1';
import ZentorsImage2 from '@components/Images/ProjectDetailsImages/ZentorsImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Project extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return (
      <ProjectContainer
        TopImage={<ZentorsImage1 />}
        BottomImage={<ZentorsImage2 />}
        isMoreSpaced={'large'}
        ProjectDescription="Zentors is a college student mentoring startup founded by 3 students of Stanford University, California. I worked as a
          UX Designer to identify and design new requirements for the application and provide technical guidance on the software architecture to the business leads."
        FooterImage={
          <FooterImage githubURL="https://github.com/eVocaTiv/ZentorsUI" />
        }
      />
    );
  }
}

export default Project;
