import { IBook } from "@/interfaces/bookInterface";
import { useUpdateBookMutation } from "@/redux/features/books/bookApi";
import { FormEvent } from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UpdateBook = (data: any) => {
  const book = data?.data;
  const navigate = useNavigate();

  const [updateBook, { isError, isSuccess }] = useUpdateBookMutation();

  // For Solving Duplicate Toast on success and error
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

  function handleUpdateBook(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const titleInput = form?.elements.namedItem("title") as HTMLInputElement;
    const title = titleInput?.value;
    const author = form.author?.value;
    const genre = form.genre?.value;
    const publication_date = form.publication_date?.value;
    const image = form.image?.value;

    const bookData: IBook = { title, author, genre, publication_date, image };
    updateBook({ data: bookData, id: book._id });
    form.reset();
  }

  useEffect(() => {
    if (showSuccessToast) {
      toast.success("Book Updated Successful");
      setShowSuccessToast(false);
      navigate(`/bookdetails/${book._id}`);
    }
  }, [showSuccessToast]);

  useEffect(() => {
    if (showErrorToast) {
      toast.error("Book Updated Failed");
      setShowErrorToast(false);
    }
  }, [showErrorToast]);

  return (
    <div>
      <form
        onSubmit={handleUpdateBook}
        className="mt-4 flex justify-center items-center flex-col"
      >
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Book Title</span>
          </label>
          <input
            name="title"
            defaultValue={book?.title}
            type="text"
            placeholder="Type Book Title"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Book Author</span>
          </label>
          <input
            name="author"
            defaultValue={book?.author}
            type="text"
            placeholder="Type Book Author Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Genre</span>
          </label>
          <input
            name="genre"
            defaultValue={book?.genre}
            type="text"
            placeholder="Type Book Genre"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Publication Date</span>
          </label>
          <input
            name="publication_date"
            defaultValue={book?.publication_date}
            type="text"
            placeholder="Publication Date As yyyy-mm-dd"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input
            name="image"
            defaultValue={book?.image}
            type="text"
            placeholder="Enter Image Link Here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button
          className="btn btn-md btn-error text-white my-4 rounded-md"
          type="submit"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
