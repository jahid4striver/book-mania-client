import auth from '@/auth/firebase.config';
import { usePostWishlistMutation } from '@/redux/features/books/bookApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const WishListCard = ({ data }: any) => {
    const [postWishlist, { isSuccess }] = usePostWishlistMutation()
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    console.log(data);

    const handleAddToWishlist = (book: object) => {
        const userEmail = user?.email;
        postWishlist({ user: userEmail, ...book });

        if (isSuccess) {
            toast.success('Added To Wishlist')
        }
    }

    return (
        <>
            {
                data?.map((book: any) => <div className="card w-full bg-base-100 shadow-xl">
                    <figure onClick={() => navigate(`/bookdetails/${book._id}`)} className="px-2 pt-2 cursor-pointer">
                        <img src={book.image} alt={book.title} className="rounded-xl  w-28" />
                    </figure>
                    <div className="card-body items-left text-left">
                        <h2 className="card-title">{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Publication Date: {book.publication_date}</p>
                        <p>Genre: {book.genre}</p>
                        <button onClick={() => handleAddToWishlist(book)} className='btn btn-xs btn-error text-white'>Add To Wishlist</button>
                    </div>
                </div>)
            }</>
    );
};

export default WishListCard;