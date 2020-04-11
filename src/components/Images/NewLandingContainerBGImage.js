import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { NewLandingGlass } from '@components';
import { NavBar } from '@components';
import ScrollAnimation from 'react-animate-on-scroll';
import { StyledArrow } from '@styles/commonStyledComponents';
import { onVisionClicked } from '@utils/commonUtils';

const ArrowDiv = styled.div`
  position: absolute;
  left: 47%;
  top: 70%;
`;
const NavBarContainer = styled.div`
  width: 100%;
`;

const MultiBackground = ({ className }) => {
  const { seamlessBackground } = useStaticQuery(
    graphql`
      query {
        seamlessBackground: file(relativePath: { eq: "new-landing-image.jpg" }) {
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
    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(57,43,89,0.6) 10%)',
  ].reverse();

  return (
    <ScrollAnimation delay={500} animateIn="fadeIn">
      <BackgroundImage
        Tag={`section`}
        className={className}
        fluid={backgroundFluidImageStack}
        alt="Kunal Dewan Website Background"
      >
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <ArrowDiv className="arrow-div home-arrow-primary">
          <ScrollAnimation delay={2500} animateIn="zoomIn">
            <StyledArrow onClick={onVisionClicked} />
          </ScrollAnimation>
        </ArrowDiv>
        <NewLandingGlass />
      </BackgroundImage>
    </ScrollAnimation>
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
  background-attachment: fixed;
`;

export default StyledMultiBackground;
