import React, { Component } from 'react';
import { ProjectContainer } from '@containers';
import BPGCImage1 from '@components/Images/ProjectDetailsImages/BPGCImage1';
import BPGCImage2 from '@components/Images/ProjectDetailsImages/BPGCImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Project extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return (
      <ProjectContainer
        TopImage={<BPGCImage1 />}
        BottomImage={<BPGCImage2 />}
        ProjectDescription="A mini project which allows one to search the google books api using search parameters such as author, publisher, book name &amp; ISBN code.
          The app is built as a dynamic web project making use of AJAX, Servlets, CSS, HTML, Jquery and Tomcat 9.0 Server."
        isMoreSpaced={'xLarge'}
        FooterImage={
          <FooterImage
          demoURLs={[
            'https://evocativ.github.io/BPGC-Remembrance/',
          ]}
          toolTips={[
            'A collage website capturing my undergraduate days',
          ]}
          areDesktopOnlyLinks
          />
        }
        />
    );
  }
}

export default Project;
