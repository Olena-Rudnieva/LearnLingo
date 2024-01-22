import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 28px;
`;

export const LinkWrapper = styled.div`
  /* display: flex;
  gap: 28px; */
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  transition: transform 250ms var(--transition);

  &:hover {
    transform: scale(1.05);
  }

  &.active {
    color: var(--olive);
  }
`;
