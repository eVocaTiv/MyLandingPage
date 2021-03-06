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
        ProjectDescription="An interactive IoT vulnerability scanner for detecting vulnerabilities
           in an enterprise network by scanning multiple communication protocols. 
           The application scans through the given IP range, detects devices present on each
           IP, logs the scanned data and presents a graphical report. I contributed as the UML prototyper &amp; UI developer."
        FooterImage={
          <FooterImage githubURL="https://github.com/eVocaTiv/IoTVulnerabilityScanner-1" />
        }
        isMoreSpaced={'large'}
      />
    );
  }
}

export default Project;
