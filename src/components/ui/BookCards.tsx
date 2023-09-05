import auth from '@/auth/firebase.config';
import { IBook } from '@/interfaces/bookInterface';
import { useGetWishlistQuery, usePostWishlistMutation } from '@/redux/features/books/bookApi';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookCards = ({ data }: any) => {
    const [postWishlist, { isSuccess, isError }] = usePostWishlistMutation();
    const {data:wishlist}=useGetWishlistQuery(undefined);
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    
    console.log(wishlist);
    
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            setShowSuccessToast(true);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            setShowErrorToast(true);
        }
    }, [isError]);

    const handleAddToWishlist = (book: IBook) => {
        const userEmail = user?.email;
        const filter=wishlist?.data.filter((wl:IBook)=>wl.title===book.title&&wl.user===userEmail);
        console.log(filter);
        if(filter.length){
            setShowErrorToast(true);
        }else{
            const {title,author,genre,publication_date,image}= book;
            postWishlist({ user: userEmail,title,author,genre,publication_date,image}); 
        }


        
    }

    useEffect(() => {
        if (showSuccessToast) {
            toast.success('Book Added To Wishlist');
            setShowSuccessToast(false);
        }
    }, [showSuccessToast]);

    useEffect(() => {
        if (showErrorToast) {
            toast.error('Book Already Added In Wishlist');
            setShowErrorToast(false);
        }
    }, [showErrorToast]);

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

export default BookCards;