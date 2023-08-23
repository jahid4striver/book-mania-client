import React from 'react';

const BookCards = ({ data }: any) => {
    console.log(data);

    return (
        <>
            {
                data?.map((book: any) => <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src={book.image} alt={book.title} className="rounded-xl" />
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

export default BookCards;