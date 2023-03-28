import SignUpForm from './sign-up-form';

const Home = () => {
  return (
    <div className='flex items-center mx-auto container max-w-7xl p-12 gap-12'>
      <div className='w-full border border-black'>
        <h1>Who are we?</h1>
        <p>
          A web application that provides great information for achievent your
          body goals
        </p>
      </div>
      <div className='border border-black w-full flex items-center justify-center'>
        <SignUpForm />
      </div>
    </div>
  );
};

export default Home;
