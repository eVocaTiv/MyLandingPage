import styled from 'styled-components';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import { Link } from 'gatsby';

const StyledArrow = styled(DoubleArrowRoundedIcon)`
  color: #00C2CB;
  height: 100%;
  padding-top: 2rem;
  cursor: pointer;
  box-sizing: content-box;
  // overriding default child transition
  transition: all 0.5s ease !important;
  &:hover {
    transform: scale(1.5);
  },
`;

export { StyledArrow };
