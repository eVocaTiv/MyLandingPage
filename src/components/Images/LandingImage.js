import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img  from 'gatsby-background-image';

const MultiBackground = ({ className }) => {
  const { seamlessBackground } = useStaticQuery(
    graphql`
      query {
        seamlessBackground: file(relativePath: { eq: "myImage.jpg" }) {
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
    'linear-gradient(to right,  rgba(0,194,203,0.8) 0%, rgba(137,90,243,0.1) 50%,  rgba(128,57,102,0.8) 100%)',
  ].reverse();

  return (
    <Img
      Tag={`section`}
      className={className}
      fluid={backgroundFluidImageStack}
      alt="Kunal Dewan About Me Background"
      style={{
        height: '100%',
        width: '40%',
        clipPath: 'polygon(0px 0px, 100% 0px, 100% 50%, 50% 0px, 100% 60%, 70% 50%, 100% 97%, 53% 80%, 51% 70%, 49% 80%, 0% 97%, 30% 50%, 0px 60%, 50% 0px, 0px 50%',
        // old design
        // clipPath: 'polygon(0px 0px, 100% 0px, 100% 50%, 50% 0px, 100% 60%, 70% 50%, 100% 97%, 0% 60%, 50% 90%, 50% 98%, 0px 90%, 45% 60%, 0px 70%, 50% 0px, 0px 60%)',
      }}
    ></Img>
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
