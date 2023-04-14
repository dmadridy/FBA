import mypicture from '../assets/images/picture.jpeg';

const Home = () => {
  return (
    <div className='mx-auto container text-center max-w-7xl py-32'>
      <div className='flex justify-center'>
        <img className='rounded-full w-16' src={mypicture} alt='' />
      </div>
      <h1 className='mt-4 text-4xl font-medium'>Frontend-engineer</h1>
      <p className='mt-2 text-gray-300 max-w-4xl mx-auto container'>
        I'm David, a frontend engineer based in
        <span className='text-indigo-300 font-medium'> Medellin</span> co.{' '}
      </p>
      <button className='mt-8 p-2 duration-200 bg-white rounded text-indigo-600 font-medium hover:scale-105'>
        Download CV
      </button>
    </div>
  );
};

export default Home;
