import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Header, Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
