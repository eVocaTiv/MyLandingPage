import React, { Component } from 'react';
import { ProjectContainer } from '@containers';
import IoTImage1 from '@components/Images/ProjectDetailsImages/IoTImage1';
import IoTImage2 from '@components/Images/ProjectDetailsImages/IoTImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Project extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return (
      <ProjectContainer
        TopImage={<IoTImage1 />}
        BottomImage={<IoTImage2 />}
        isMoreSpaced={'medium'}
        ProjectDescription="The master code collection of my programming efforts.
          This includes all the algorithms, contests, design-patterns and other personal
           small snippets coded in Java. "
        FooterImage={
          <FooterImage githubURL="https://github.com/eVocaTiv/JustDev" />
        }
      />
    );
  }
}

export default Project;
