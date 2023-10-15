import Loader from "@/components/ui/Loader";
import UpdateBook from "@/components/UpdateBook";
import { useGetSingleBookQuery } from "@/redux/features/books/bookApi";
import { useParams } from "react-router-dom";

const EditBook = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id);

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div>
             <h1 className="text-xl text-center my-4">Update Book</h1>
            <UpdateBook data={data} />
        </div>
    );
};

export default EditBook;