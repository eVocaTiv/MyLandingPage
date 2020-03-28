import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const StyledPaperText = styled.div`
  // override default transition in card's child.
  cursor: pointer;
  min-width: 200px !important;
  width: 50% !important;
  box-sizing: border-box;
  font-size: 2rem;
  padding: 0.5rem;
  background-color: transparent !important;
  position: absolute;
  left: 40%;
  top: 30%;
  pointer-events: none;
  color: white;
  width: 100%;
  font-family: 'Julius Sans One';
`;

const MultiBackground = ({ className }) => {
  const { seamlessBackground } = useStaticQuery(
    graphql`
      query {
        seamlessBackground: file(relativePath: { eq: "proj-udemy-2.jpg" }) {
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
    'linear-gradient(45deg, rgba(128,57,102,0.75) 0%, rgba(204,112,171,0.5) 100%)',
  ].reverse();

  return (
    <BackgroundImage
      Tag={`section`}
      className={className}
      fluid={backgroundFluidImageStack}
      alt="Kunal Dewan Udemy UI Fiddles"
    >
      <StyledPaperText>
        <ScrollAnimation animateIn="zoomIn">
        </ScrollAnimation>
      </StyledPaperText>
    </BackgroundImage>
  );
};

const MyWebsiteImage1 = styled(MultiBackground)`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 155%, center, center;
  color: #fff;
  background-attachment: fixed;
`;

export default MyWebsiteImage1;
