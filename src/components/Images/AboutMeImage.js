import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import { AboutMe } from '@components';
import BackgroundImage from 'gatsby-background-image';

const MultiBackground = ({ className }) => {
  const { visionSection } = Constants.anchorIds;
  const { seamlessBackground } = useStaticQuery(
    graphql`
      query {
        seamlessBackground: file(relativePath: { eq: "nescafe.jpg" }) {
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
    'linear-gradient(to bottom, rgba(90,43,89,0.6) 0%, rgba(0,0,0,1) 100%)',
  ].reverse();

  return (
    <BackgroundImage
      Tag={`section`}
      className={className}
      fluid={backgroundFluidImageStack}
      alt="Kunal Dewan About Me Background"
      id={visionSection}
    >
      <AboutMe />
    </BackgroundImage>
  );
};

const StyledMultiBackground = styled(MultiBackground)`
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 155%, center, center;
  color: #fff;
`;

export default StyledMultiBackground;
