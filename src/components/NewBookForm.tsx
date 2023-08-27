import { IBook } from '@/interfaces/bookInterface';
import { usePostBookMutation } from '@/redux/features/books/bookApi';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';
import {useState,useEffect} from 'react'

const NewBookForm = () => {
    const [postBook, { isError, isSuccess }] = usePostBookMutation();
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            setShowSuccessToast(true);
        }
    }, [isSuccess])

    const handleAddBook = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const title = form.title?.value;
        const author = form.author?.value;
        const genre = form.genre?.value;
        const publication_date = form.publication_date?.value;
        const image = form.image?.value;

        const bookData: IBook = { title, author, genre, publication_date, image };
        postBook(bookData);
        form.reset()

    }

    useEffect(() => {
        if (showSuccessToast) {
            toast.success('Book Added Successful');
            setShowSuccessToast(false);
        }
    }, [showSuccessToast]);
    

    if (isError) {
        return toast.error("Book Added Failed")
    }


    return (
        <div>
            <form onSubmit={handleAddBook} className='mt-4 flex justify-center items-center flex-col'>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Book Title</span>
                    </label>
                    <input name='title' type="text" placeholder="Type Book Title" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Book Author</span>
                    </label>
                    <input name='author' type="text" placeholder="Type Book Author Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Genre</span>
                    </label>
                    <input name='genre' type="text" placeholder="Type Book Genre" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Publication Date</span>
                    </label>
                    <input name='publication_date' type="text" placeholder="Publication Date As yyyy-mm-dd" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Image Link</span>
                    </label>
                    <input name='image' type="text" placeholder="Enter Image Link Here" className="input input-bordered w-full max-w-xs" />
                </div>
                <button className='btn btn-md btn-error text-white my-4 rounded-md' type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default NewBookForm;