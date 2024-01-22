import { useSelector } from 'react-redux';
import { Nav, StyledLink } from './Navigation.styled';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="teachers">Teachers</StyledLink>
      {isLoggedIn && <StyledLink to="favorites">Favorites</StyledLink>}
    </Nav>
  );
};
