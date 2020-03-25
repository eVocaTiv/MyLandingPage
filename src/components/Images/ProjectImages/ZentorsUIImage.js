import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CardImage = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "zentors-ui.jpg" }) {
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
      id="venture-ui-image"
      // inline style for image wrapper div.
      style={{
        height: '100%',
        width: '100%',
      }}
      imgStyle={{ 
        objectPosition: 'center',
        objectFit: 'fill',
      }}
      fluid={backgroundFluidImageStack}
      alt="Kunal Dewan Zentors UI website mockups fiddles"
    />
  );
};

export default CardImage;