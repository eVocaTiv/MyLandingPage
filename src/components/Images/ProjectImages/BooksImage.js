import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CardImage = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "proj-books.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundFluidImageStack = [cardImage.childImageSharp.fluid].reverse();

  return (
    <Img
      id="kunal-dewan-books-image"
      // inline style for image wrapper div.
      style={{
        height: '100%',
        width: '100%',
      }}
      imgStyle={{ 
        objectPosition: 'center',
      }}
      fluid={backgroundFluidImageStack}
      alt="Kunal Dewan Library Books Search App"
    />
  );
};

export default CardImage;
