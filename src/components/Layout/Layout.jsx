import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
