import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import BookCards from "./ui/BookCards";

const HomeBooks = () => {
    const { data } = useGetBooksQuery(undefined);

    console.log(data)
    return (
        <div>
            <h1 className="text-xl text-center my-4">Recent Books</h1>
           <div className="grid grid-cols-4 gap-2 mx-auto">
           <BookCards data={data?.data}/>
           </div>
        </div>
    );
};

export default HomeBooks;