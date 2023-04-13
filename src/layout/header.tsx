import { NavLink } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../assets/styles';

const Header = () => {
  return (
    <div className='border-b border-gray-600'>
      <div className='border-t-4 border-indigo-300'></div>
      <div className='container max-w-7xl flex justify-center mx-auto p-6 gap-8'>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='/blog'
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='/projects'
        >
          Projects
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
