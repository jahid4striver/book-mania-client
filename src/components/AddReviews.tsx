import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth'; // Replace with the actual package you're using
import auth from '@/auth/firebase.config';
import { usePostReviewMutation } from '@/redux/features/books/bookApi';
import { useParams } from 'react-router-dom';

const AddReviews: React.FC = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset, formState: { } } = useForm();
    const [user] = useAuthState(auth);
    const [postReview] = usePostReviewMutation()

    console.log(id);


    const onSubmit = (data: any) => {
        const review = data.review;
        const reviewdBy = user?.email?.split('@')[0];;
        postReview({ id, review: { review, reviewdBy } })
        reset();
    };


    return (
        <div className="shadow-xl p-2 mt-4">
            <form className='flex flex-row justify-left items-center' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-md p-2">
                    <div className='flex justify-between'>
                        <label htmlFor="review" className="block text-gray-600 mb-2">Add Your Reviews</label>
                    </div>
                    <input {...register("review")} type="text" placeholder='Type Review' className="w-80 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 backdrop-blur-sm" required />
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
