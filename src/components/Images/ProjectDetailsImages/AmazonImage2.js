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
  font-size: 1.15rem;
  padding: 0.5rem;
  font-weight: bold;
  line-height: 3rem;
  background-color: transparent !important;
  position: absolute;
  left: 10%;
  text-align: justify;
  pointer-events: none;
  color: white;
  width: 100%;
  font-family: 'Montserrat';
`;

const MultiBackground = ({ className }) => {
  const { seamlessBackground } = useStaticQuery(
    graphql`
      query {
        seamlessBackground: file(relativePath: { eq: "proj-amazon-2.jpg" }) {
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
      alt="Kunal Dewan Amazon Work Experience "
    >
      <StyledPaperText className="project-image-2 anim-smooth">
        <ScrollAnimation animateIn="zoomIn">
          Being the 1st ever Front-End Engineer hire at Amazon India straight
          out of college was a big milestone for me! I currently work in the same
          team building sophisticated dashboards and reusable components. The
          tech. stack includes vanilla JavaScript, HTML, CSS, React, Java and
          JSPs. The work is highly confidential &amp; obviously can't be revealed :P. 
           If you are interested to know more about me, feel free to get in touch!
        </ScrollAnimation>
      </StyledPaperText>
    </BackgroundImage>
  );
};

const AmazonImage2 = styled(MultiBackground)`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 155%, center, center;
  color: #fff;
  background-attachment: fixed;
`;

export default AmazonImage2;
