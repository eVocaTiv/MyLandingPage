import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";
import styled from 'styled-components';

const ZeldaSwordImage = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "zelda-sword.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundFluidImageStack = [cardImage.childImageSharp.fluid].reverse();

  return (
      <Img
        // inline style for image wrapper div.
        style={{
          minWidth: '100%',
          minHeight: '100%',
          transform: 'rotate(-45deg)',
        }}
        fluid={backgroundFluidImageStack}
        alt="Kunal Dewan Zelda Sword Image"
      />
  );
};

const StyledZeldaSwordImage = styled(ZeldaSwordImage)`
  width: 100%;
  min-height: 100vh;
  color: #fff;
`;


export default StyledZeldaSwordImage;
