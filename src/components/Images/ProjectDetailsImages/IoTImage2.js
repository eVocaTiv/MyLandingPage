import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const MultiBackground = ({ className }) => {
  const { seamlessBackground } = useStaticQuery(
    graphql`
      query {
        seamlessBackground: file(relativePath: { eq: "proj-iot-2.jpg" }) {
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
    'linear-gradient(45deg, rgba(128,57,102,0.25) 0%, rgba(204,112,171,0.75) 100%)',
  ].reverse();

  return (
    <BackgroundImage
      Tag={`section`}
      className={className}
      fluid={backgroundFluidImageStack}
      alt="Kunal Dewan IoT Vulnerability Scanner"
    >
    </BackgroundImage>
  );
};

const IoTImage2 = styled(MultiBackground)`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 155%, center, center;
  color: #fff;
  background-attachment: fixed;
`;

export default IoTImage2;
