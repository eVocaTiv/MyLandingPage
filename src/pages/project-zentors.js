import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { ProjectContainer } from '@containers';
import IoTImage1 from '@components/Images/ProjectDetailsImages/IoTImage1';
import IoTImage2 from '@components/Images/ProjectDetailsImages/IoTImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';

class Project extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ProjectContainer
          TopImage={<IoTImage1 />}
          BottomImage={<IoTImage2 />}
          isMoreSpaced={'medium'}
          ProjectDescription="An interactive IoT vulnerability scanner for detecting vulnerabilities
           in an enterprise network by scanning multiple communication protocols. 
           The application scans through the given IP range, detects devices present on each
           IP, logs the scanned data and presents a graphical report. I contributed as the UML prototyper &amp; UI developer."
          FooterImage={
            <FooterImage githubURL="https://github.com/eVocaTiv/ZentorsUI" />
          }
        />
      </ThemeProvider>
    );
  }
}

export default Project;
