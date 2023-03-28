import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirm_password: '',
    },
  });
  return (
    <form className='p-8 border border-black'>
      <h1 className='text-center mb-4'>Create an account</h1>
      <div>
        <label htmlFor='email'>
          Email Adress
          <input
            className='border border-neutral-400 block p-2 rounded'
            id='email'
            type='email'
          />
        </label>
        <label htmlFor='username'>
          Username
          <input
            className='border border-neutral-400 block p-2 rounded'
            id='username'
            type='texr'
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            className='border border-neutral-400 block p-2 rounded'
            id='password'
            type='texr'
          />
        </label>

        <label htmlFor='confirm_password'>
          Confirm Password
          <input
            className='border border-neutral-400 block p-2 rounded'
            id='confirm_password'
            type='texr'
          />
        </label>
      </div>
      <div className='justify-center flex'>
        <button className='mt-4 px-4 py-2 bg-neutral-300'>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
