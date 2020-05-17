import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import ScrollAnimation from 'react-animate-on-scroll';

const StyledPaperText = styled.div`
  // override default transition in card's child.
  cursor: pointer;
  min-width: 200px !important;
  width: 80% !important;
  box-sizing: border-box;
  font-size: 1.5rem;
  padding: 0.5rem;
  line-height: 3rem;
  background-color: transparent !important;
  position: absolute;
  left: 10%;
  top: 25%;
  pointer-events: none;
  color: white;
  width: 100%;
  font-family: 'Montserrat';
`;

const MultiBackground = ({ className }) => {
  const { seamlessBackground } = useStaticQuery(
    graphql`
      query {
        seamlessBackground: file(relativePath: { eq: "proj-bpgc-2.jpg" }) {
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
      alt="Kunal Dewan BITS Pilani Goa Campus Collage Website "
    >
      <StyledPaperText className="project-image-2 anim-smooth">
      </StyledPaperText>
    </BackgroundImage>
  );
};

const BPGCImage2 = styled(MultiBackground)`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 155%, center, center;
  color: #fff;
  background-attachment: fixed;
`;

export default BPGCImage2;
