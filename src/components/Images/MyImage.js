import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const MyImage = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "logo-big.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const backgroundFluidImageStack = [cardImage.childImageSharp.fluid].reverse();

  return (
    <BackgroundImage
      // inline style for image wrapper div.
      style={{
        height: '100%',
        width: '40%',
        clipPath:
          'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
      }}
      imgStyle={{
        height: '100%',
        backgroundSize: 'cover',
        borderTopLeftRadius: '3px',
        'backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden',
      }}
      fluid={backgroundFluidImageStack}
      alt="Kunal Dewan"
    />
  );
};

export default MyImage;
