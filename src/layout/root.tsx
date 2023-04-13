import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Root = () => {
  return (
    <div className='flex flex-col justify-between h-screen bg-gray-900 text-white'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
