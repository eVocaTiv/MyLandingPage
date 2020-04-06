import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CardImage = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "proj-zentors.jpg" }) {
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
      id="zentors-ui-image"
      // inline style for image wrapper div.
      style={{
        height: '100%',
        width: '100%',
      }}
      imgStyle={{ 
        objectPosition: 'center',
      }}
      fluid={backgroundFluidImageStack}
      alt="Kunal Dewan Zentors UI website mockups fiddles"
    />
  );
};

export default CardImage;
