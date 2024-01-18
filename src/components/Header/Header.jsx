import { Logo } from 'components/Logo/Logo';
import { HeaderWrapper } from './Header.styled';
import { Container } from 'components/Container/Container';
import { Navigation } from 'components/Navigation/Navigation';
import { Link } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
        <AuthNav />
      </HeaderWrapper>
    </Container>
  );
};
