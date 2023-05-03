import { NavLink, Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../App.styled';
import './Styled.scss';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #eeeeee;
  font-weight: 500;

  &:hover {
    color: #bdbdbd;
  }

  &.nav-link.active {
    color: #ffc107;
  }
`;

const Layout = () => {
  return (
    <>
      <header>
        <nav className="nav">
          <Container>
            <Link to="/">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="The Movie Database (TMDB)"
                width="154"
                height="20"
              ></img>
            </Link>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </Container>
        </nav>
      </header>

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
