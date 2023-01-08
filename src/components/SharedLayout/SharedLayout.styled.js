import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 16px;
  background-color: #3f51b5;
`;

export const Link = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  font-size: 25px;

  &.active {
    color: #efb343;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
