import { Link, NavLink } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../assets/styles';
import logo from '../assets/icons/Logo.png';
import Sidebar from '../components/sidebar';

const Header = () => {
  return (
    <div className='border-b border-gray-600'>
      <div className='border-t-4 border-indigo-300'></div>
      <div className='xl:px-0 px-4 container max-w-7xl flex justify-between mx-auto items-center py-4 relative'>
        <Link className='w-12' to='/'>
          <img src={logo} alt='' />
        </Link>
        <Sidebar />
        <div className='hidden md:block space-x-8'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : unactiveStyle
            }
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : unactiveStyle
            }
            to='/blog'
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : unactiveStyle
            }
            to='/projects'
          >
            Projects
          </NavLink>
          <a
            href='mailto:davidmadridpathway@gmail.com'
            className='font-medium bg-indigo-700 p-3 hover:bg-indigo-800 duration-300 rounded'
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
