import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from "gatsby"

const StyledArrow = styled(ArrowDropDownIcon)`
  color: #00C2CB;
  height: 100%;
  padding-top: 2rem;
  // overriding default child transition
  transition: all 0.5s ease !important;
  &:hover {
    transform: scale(1.5);
  },
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export {StyledArrow, StyledLink };
