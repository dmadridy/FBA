import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Menu as='div' className='w-56 text-right md:hidden'>
      <Menu.Button className='inline-flex justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white'>
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
        <Menu.Items className='text-left flex p-4 bg-gray-700 flex-col absolute w-full right-0 mt-2 space-y-2 rounded-md shadow-lg'>
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
  );
};

export default Sidebar;
