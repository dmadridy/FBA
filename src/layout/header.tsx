import { Link, NavLink } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../assets/styles';
import logo from '../assets/icons/Logo.png';
import { Menu, Transition } from '@headlessui/react';

const Header = () => {
  return (
    <div className='border-b border-gray-600'>
      <div className='border-t-4 border-indigo-300'></div>
      <div className='xl:px-0 px-4 container max-w-7xl flex justify-between mx-auto items-center py-4'>
        <Link className='w-12' to='/'>
          <img src={logo} alt='' />
        </Link>
        <Menu>
          <Menu.Button>Menu</Menu.Button>
          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Menu.Items>
              <Menu.Item>
                <Link to='/about'>About</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/blog'>Blog</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/projects'>Projects</Link>
              </Menu.Item>
              <Menu.Item>
                <a href='mailto:davidmadridpathway@gmail.com'>Get in touch</a>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
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
