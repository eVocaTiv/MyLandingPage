import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import { Card } from '@components';
import BackgroundImage from 'gatsby-background-image';

const MultiBackground = ({ className }) => {
  const { visionSection } = Constants.anchorIds;
  const { seamlessBackground } = useStaticQuery(
    graphql`
      query {
        seamlessBackground: file(relativePath: { eq: "vision-bg-image.jpg" }) {
          childImageSharp {
            fluid(quality: 50) {
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
    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(57,43,89,0.6) 10%)',
  ].reverse();

  return (
    <BackgroundImage
      Tag={`section`}
      className={className}
      fluid={backgroundFluidImageStack}
      alt="Kunal Dewan Vision Background"
      id={visionSection}
    >
      <Card />
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
  background-attachment: fixed;
`;

export default StyledMultiBackground;
