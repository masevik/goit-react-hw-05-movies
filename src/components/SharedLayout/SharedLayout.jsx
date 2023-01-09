import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Loader } from '../Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
