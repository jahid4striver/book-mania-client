import auth from "@/auth/firebase.config";
import { useDeleteBookMutation } from "@/redux/features/books/bookApi";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BookDetailsCard = (data: any) => {
    const [user] = useAuthState(auth);
    const book = data?.data;
    const navigate = useNavigate();
    const [deleteBook] = useDeleteBookMutation()

    const handleDeleteBook = (id: string) => {
        const proceed = window.confirm('Are You Sure Want To Delete');
        if (proceed) {
            deleteBook(id);
            toast('Book Delete Successful');
            navigate('/allbooks');
        }
    }

    return (
        <>
            <div className=" bg-base-100 shadow-xl p-5 h-full flex flex-row justify-center items-center">
                <div className="mx-auto">
                    <figure className="px-2 pt-2">
                        <img src={book?.image} alt={book?.title} className="rounded-xl  w-60" />
                    </figure>
                </div>
                <div className="mx-auto">
                    <h2 className="card-title">{book?.title}</h2>
                    <p>Author: {book?.author}</p>
                    <p>Publication Date: {book?.publication_date}</p>
                    <p>Genre: {book?.genre}</p>
                    {user?.email && <div className="mt-2 flex gap-2">
                        <button onClick={() => navigate(`/edit/${book?._id}`)} className="btn btn-sm btn-primary text-white font-bold">Edit</button>
                        <button onClick={() => handleDeleteBook(book?._id)} className="btn btn-sm btn-error text-white font-bold">Delete</button>
                    </div>


                    }
                </div>

            </div>
            <div className="mt-4">
                <h3 className="font-bold">{book?.reviews?.length ? 'Reviews' : 'No Review Yet'}</h3>
                {
                    book?.reviews?.map((r: any) => <p className="shadow-md p-2">@{r.reviewdBy}-{r.review}</p>)
                }
            </div>
        </>
    );
};

export default BookDetailsCard;