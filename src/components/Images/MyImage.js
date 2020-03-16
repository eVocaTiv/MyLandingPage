import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const MyImage = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "myImage.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const backgroundFluidImageStack = [
    cardImage.childImageSharp.fluid,
    `linear-gradient(rgba(255, 255, 255, 0.73), rgba(86, 67, 250, 0.73))`,
  ].reverse();

  return (
    <BackgroundImage
      // inline style for image wrapper div.
      style={{
        height: '100%',
        width: '40%',
        clipPath: 'polygon(0 0, 100% 0px, 100% 50%, 50% 0, 100% 60%, 50% 100%, 0px 60%, 50% 0, 0 50%)',
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
      loading="eager"
    />
  );
};

export default MyImage;
