import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
