import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-center max-w-7xl container mx-auto p-4 gap-4'>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
    </div>
  );
};

export default Header;
