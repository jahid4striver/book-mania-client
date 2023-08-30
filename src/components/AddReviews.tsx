import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth'; // Replace with the actual package you're using
import auth from '@/auth/firebase.config';

const AddReviews: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = async (data: any) => {

    };


    return (
        <div className="shadow-xl p-5 mt-4">
            <form className='flex flex-row justify-left items-center' onClick={handleSubmit(onSubmit)}>
                <div className="mb-4 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-md p-2">
                    <div className='flex justify-between'>
                        <label htmlFor="review" className="block text-gray-600 mb-2">Add Your Reviews</label>
                        <label className="label">
                            <span className="label-text-alt text-red-500">{errors.review && <span>This field is required</span>}</span>
                        </label>
                    </div>
                    <input {...register("review", { required: true, })} type="text" placeholder='Type Review' className="w-80 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 backdrop-blur-sm" />
                </div>
                <div>
                    <button type="submit" className="w-full py-2 px-4 bg-red-600 font-bold text-white rounded-md hover:bg-red-700 focus:outline-none backdrop-blur-sm lg:mt-4">Add Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddReviews;
