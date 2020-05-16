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
        ProjectDescription="A pictorial website capturing moments from my undergraduate days at  BITS Pilani, K. K. Birla Goa Campus. Made using React &amp; JavaScript, HTML5 for markup,  Sass for styling, Swiper for image display &amp; Parallax for animations. Feel free to reach out to me incase of any contributions or your own moments at BITS!"
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
