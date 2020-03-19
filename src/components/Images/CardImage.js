import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-background-image';

const CardImage = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "card-image.jpg" }) {
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
        // inline style for image wrapper div.
        style={{
          height: '100%',
          width: '40%',
          clipPath:
            'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
        }}
        fluid={backgroundFluidImageStack}
        alt="Kunal Dewan"
        critical
      />
  );
};

export default CardImage;
