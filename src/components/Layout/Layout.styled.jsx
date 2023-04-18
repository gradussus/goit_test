import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: tomato solid;
  padding-top: 25px;
  padding-bottom: 25px;
`;
export const Link = styled(NavLink)`
  margin: 10px;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;
export const Main = styled.main`
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;
