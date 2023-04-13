import rmd from '../assets/images/rmdlogo.png';

const Projects = () => {
  return (
    <div className='max-w-7xl mx-auto container py-12'>
      <h1 className='text-center mb-12 text-4xl font-medium'>
        Some of the projects <br /> I've worked on.
      </h1>
      <div className='grid grid-cols-3 gap-4'>
        <a href='https://rmd-rouge.vercel.app/' target='_blank'>
          <div className='p-8 rounded-lg bg-gray-800 duration-300'>
            <img className='w-8' src={rmd} alt='' />
            <h1 className='mt-4 font-medium'>RMDB</h1>
            <p className='text-sm text-gray-300'>
              Platform that provides movie browsing and discovering.
            </p>
            <p className='mt-4 text-indigo-300'>
              https://rmd-rouge.vercel.app/
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
