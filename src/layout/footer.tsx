import github from '../assets/icons/github.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';

const Footer = () => {
  return (
    <div className='container py-12 mx-auto max-w-7xl md:flex justify-between space-y-8 md:space-y-0'>
      <div className='flex text-neutral-400 text-sm justify-center'>
        <p>© 2023 David Madrid</p>
      </div>
      <div className='space-x-6 flex justify-center'>
        <a href='https://github.com/dmadridy' target='_blank'>
          <img className='w-5' src={github} alt='' />
        </a>
        <a href='https://www.instagram.com/dmadridy/' target='_blank'>
          <img className='w-5' src={instagram} alt='' />
        </a>
        <a
          href='https://www.linkedin.com/in/david-madrid-0809211a1/'
          target='_blank'
        >
          <img className='w-5' src={linkedin} alt='' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
