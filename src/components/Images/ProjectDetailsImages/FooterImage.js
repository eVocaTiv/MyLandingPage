import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import ScrollAnimation from 'react-animate-on-scroll';
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Tooltip from '@material-ui/core/Tooltip';

const StyledPaperText = styled.div`
  // override default transition in card's child.
  cursor: pointer;
  min-width: 200px !important;
  width: 30% !important;
  box-sizing: border-box;
  font-size: 2rem;
  padding: 0.5rem;
  background-color: transparent !important;
  position: absolute;
  left: 35%;
  text-align: center;
  top: 35%;
  pointer-events: none;
  color: white;
  width: 100%;
  font-family: 'Julius Sans One';
`;

const StyledGitHubIcon = styled(GitHubIcon)`
  color: #ffffff;
  // overriding default child transition
  transition: all 0.5s ease !important;
  fontSize: 1rem;
  pointer-events: auto;
  &:hover {
    transform: scale(1.5);
  },
`;

const StyledTvIcon = styled(LiveTvIcon)`
  color: #ffffff;
  // overriding default child transition
  transition: all 0.5s ease !important;
  fontSize: 1rem;
  pointer-events: auto;
  margin: 0.25rem 0.25rem;
  &:hover {
    transform: scale(1.5);
  },
`;

const MultiBackground = ({ className, githubURL, demoURLs, toolTips }) => {
  const { seamlessBackground } = useStaticQuery(
    graphql`
      query {
        seamlessBackground: file(relativePath: { eq: "project-footer.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  // The lowermost image comes last!
  const backgroundFluidImageStack = [
    seamlessBackground.childImageSharp.fluid,
    'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(15,37,70,0.75) 20%, rgba(15,37,70,0.9) 30%, rgba(15,37,70,0.9) 70%, rgba(15,37,70,0.75) 80%,  rgba(0,0,0,0.5) 100%)',
  ].reverse();

  const getDemoLinks = (demoURLs) => {
    if (!demoURLs) return null;
    return demoURLs.map((url, index) => (
      <Tooltip key={url}title={toolTips[index]}>
        <a key={url} target="_blank" href={url}>
          <StyledTvIcon />
        </a>
      </Tooltip>
    ));
  };

  return (
    <BackgroundImage
      Tag={`section`}
      fluid={backgroundFluidImageStack}
      className={className}
      alt="Kunal Dewan Project Footer Image"
    >
      <StyledPaperText className="project-icons anim-smooth">
        <ScrollAnimation animateIn="flash">
          <br />
          {githubURL && (
            <a href={githubURL} target="_blank">
              <StyledGitHubIcon />
            </a>
          )}
          {demoURLs && 'Demos '}
          {!demoURLs && !githubURL && (
            ' =] '
          )}
          <br />
          {getDemoLinks(demoURLs)}
        </ScrollAnimation>
      </StyledPaperText>
    </BackgroundImage>
  );
};

const FooterImage = styled(MultiBackground)`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 155%, center, center;
  color: #fff;
  background-attachment: fixed;
`;

export default FooterImage;
