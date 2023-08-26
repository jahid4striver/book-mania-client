import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'; // Replace with the actual package you're using
import auth from '@/auth/firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import signup from '../assets/images/signup.png'

const SignUpForm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }



  const onSubmit = async( data:any) => {
    await createUserWithEmailAndPassword(data.email, data.password);
  };


  return (
    <div className="flex flex-col justify-center items-center h-50">

      <div className="relative p-8 rounded-lg shadow-md w-96 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="absolute  bg-cover bg-center filter blur-md opacity-60"></div>
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className='text-red-600 text-xl mb-4 font-bold'>Sign Up To Book Mania</h1>
          <img src={signup} alt="Logo" className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>
        <form onClick={handleSubmit(onSubmit)}>
          <div className="mb-4 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-md p-2">
            <div className='flex justify-between'>
              <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
              <label className="label">
                <span className="label-text-alt text-red-500">{errors.email && <span>This field is required</span>}</span>
              </label>
            </div>
            <input {...register("email", { required: true, })} type="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 backdrop-blur-sm" />

          </div>
          <div className="mb-4 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-md p-2">
            <div className='flex justify-between'>
              <label htmlFor="password" className="block text-gray-600 mb-2"> Password</label>
              <label className="label">
                <span className="label-text-alt text-red-500">{errors.password && <span>This field is required</span>}</span>
              </label>
            </div>
            <input {...register("password", { required: true })} type="password" className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 backdrop-blur-sm" />

          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-red-600 font-bold text-white rounded-md hover:bg-red-700 focus:outline-none backdrop-blur-sm">Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
