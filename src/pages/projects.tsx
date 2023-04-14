import rmd from '../assets/images/rmdlogo.png';
import fithub from '../assets/images/fithub.png';
import armcare from '../assets/images/armcare.png';
import remitlywhite from '../assets/images/remitly.png';
import { projectsBoxStyle } from '../assets/styles';

const Projects = () => {
  return (
    <div className='max-w-7xl mx-auto container py-12'>
      <h1 className='text-center mb-12 text-4xl font-medium'>
        Some of the projects <br /> I've worked on.
      </h1>
      <div className='grid grid-cols-3 gap-4'>
        <a href='https://armcare.com/' target='_blank'>
          <div className={projectsBoxStyle}>
            <img className='w-8 h-8' src={armcare} alt='' />
            <div className='mt-4'>
              <p className='text-sm text-gray-300'>
                <span className='text-white font-medium text-lg'>ArmCare</span>{' '}
                <br />
                Platform that provides movie browsing and discovering.
              </p>
            </div>
            <p className='mt-4'>armcare.com</p>
          </div>
        </a>
        <a href='https://www.remitly.com/us/es/colombia' target='_blank'>
          <div className={projectsBoxStyle}>
            <img className='w-8 h-8' src={remitlywhite} alt='' />
            <div className='mt-4'>
              <p className='text-sm text-gray-300'>
                <span className='text-white font-medium text-lg'>Remitly</span>{' '}
                <br />
                Platform that provides movie browsing and discovering.
              </p>
            </div>
            <p className='mt-4'>remitly.com</p>
          </div>
        </a>
        <a href='https://fithub.com.co/stores/market/' target='_blank'>
          <div className={projectsBoxStyle}>
            <img className='w-8 h-8' src={fithub} alt='' />
            <div className='mt-4'>
              <p className='text-sm text-gray-300'>
                <span className='text-white font-medium text-lg'>Fithub</span>{' '}
                <br />
                Platform that provides movie browsing and discovering.
              </p>
            </div>
            <p className='mt-4'>fithub.com.co</p>
          </div>
        </a>
        <a href='https://rmd-rouge.vercel.app/' target='_blank'>
          <div className={projectsBoxStyle}>
            <img className='w-8 h-8' src={rmd} alt='' />
            <div className='mt-4'>
              <p className='text-sm text-gray-300'>
                <span className='text-white font-medium text-lg'>RMDB</span>{' '}
                <br />
                Platform that provides movie browsing and discovering.
              </p>
            </div>
            <p className='mt-4'>rmd-rouge.vercel.app</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
