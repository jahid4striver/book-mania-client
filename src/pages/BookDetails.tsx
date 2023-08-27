import BookDetailsCard from '@/components/BookDetailsCard';
import { useGetSingleBookQuery } from '@/redux/features/books/bookApi';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const { data,isLoading } = useGetSingleBookQuery(id);

    if(isLoading){
        return <p>Loading.....</p>
    }
    console.log(data);
    return (
        <div>
            <BookDetailsCard data={data} />
        </div>
    );
};

export default BookDetails;