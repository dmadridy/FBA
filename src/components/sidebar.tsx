import { Menu, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { activeSidebar, unactiveSidebar } from '../assets/styles';

const Sidebar = () => {
  return (
    <Menu as='div' className='w-56 text-right md:hidden z-20'>
      <Menu.Button className='inline-flex justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 font-medium text-white'>
        Menu
      </Menu.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Menu.Items className='text-left flex p-4 bg-gray-800 flex-col absolute w-full right-0 mt-2 space-y-2 rounded-md shadow-lg'>
          <Menu.Item>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeSidebar : unactiveSidebar
              }
              to='/about'
            >
              About
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeSidebar : unactiveSidebar
              }
              to='/blog'
            >
              Blog
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeSidebar : unactiveSidebar
              }
              to='/projects'
            >
              Projects
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <div className='font-medium bg-indigo-700 p-3 text-center rounded'>
              <a href='mailto:davidmadridpathway@gmail.com'>Get in touch</a>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Sidebar;
