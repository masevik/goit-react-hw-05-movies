import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 16px;
  background-color: blue;
`;

export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-right: 20px;

  &.active {
    color: orange;
  }
`;
