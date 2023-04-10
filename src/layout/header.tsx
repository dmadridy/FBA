import { NavLink } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../assets/styles';

const Header = () => {
  return (
    <div className='flex justify-center max-w-7xl container mx-auto p-4 space-x-4'>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to='/about'
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to='/blod'
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
  );
};

export default Header;
