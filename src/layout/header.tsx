import { NavLink } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../assets/styles';

const Header = () => {
  return (
    <div className='flex p-4 items-center border border-black justify-between mx-auto container max-w-7xl'>
      <h1 className='py-2 px-4'>logo</h1>
      <div className='flex space-x-4'>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='/'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='/'
        >
          Services
        </NavLink>
      </div>
      <button className='py-2 px-4'>Log In</button>
    </div>
  );
};

export default Header;
