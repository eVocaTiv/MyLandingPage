import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CardImage = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "blog.jpg" }) {
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
      id="kunal-dewan-medium-blog-image"
      // inline style for image wrapper div.
      style={{
        height: '100%',
        width: '100%',
      }}
      fluid={backgroundFluidImageStack}
      alt="Kunal Dewan User Experience Design Projects IMAGE"
    />
  );
};

export default CardImage;
