import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Root = () => {
  return (
    <div className='bg-slate-900 text-white'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
