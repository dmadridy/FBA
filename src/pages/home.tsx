import mypicture from '../assets/images/picture.jpeg';

const Home = () => {
  return (
    <div className='mx-auto container text-center max-w-7xl py-16'>
      <div className='flex justify-center'>
        <img className='rounded-full w-16' src={mypicture} alt='' />
      </div>
      <h1 className='mt-8 text-4xl font-medium'>Frontend-engineer</h1>
      <p className='mt-4 text-gray-300 max-w-4xl mx-auto container'>
        I'm David, a frontend engineer based in Medellin co. <br /> with a
        passion for learning new technologies. I enjoy keeping up with the
        latest design patterns, architectural styles, and other industry
        updates. I'm always eager to expand my skill set and stay up-to-date
        with the ever-evolving world of frontend development. Whether it's
        experimenting with new frameworks, optimizing performance, or creating
        seamless user experiences, I thrive on staying ahead of the curve. Let's
        build innovative and cutting-edge web applications together
      </p>
    </div>
  );
};

export default Home;
