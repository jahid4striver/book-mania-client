import { useNavigate } from 'react-router-dom';

const BookDetailsCard = ({ data }: any) => {
    const navigate=useNavigate();
    console.log(data);

    return (
        <>
            {
                data?.map((book: any) => <div className="card w-full bg-base-100 shadow-xl">
                    <figure onClick={()=>navigate(`/bookdetails/${book._id}`)} className="px-2 pt-2 cursor-pointer">
                        <img src={book.image} alt={book.title} className="rounded-xl  w-28" />
                    </figure>
                    <div className="card-body items-left text-left">
                        <h2 className="card-title">{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Publication Date: {book.publication_date}</p>
                        <p>Genre: {book.genre}</p>
                    </div>
                </div>)
            }</>
    );
};

export default BookDetailsCard;