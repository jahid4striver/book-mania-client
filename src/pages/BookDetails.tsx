import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Detils of {id}</h1>
        </div>
    );
};

export default BookDetails;