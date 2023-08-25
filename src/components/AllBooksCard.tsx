import { ChangeEvent, useState } from 'react'
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import BookCards from "./ui/BookCards";
import { IBook } from '@/interfaces/bookInterface';

const AllBooksCard = () => {
    const [searchResult, setSearchResult] = useState<IBook[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const { data } = useGetBooksQuery(undefined);
    const books: IBook[] | undefined = data?.data;

    const uniqueGenres: string[] = [...new Set(books?.map((book) => book.genre))];
    const uniqueYear: string[] = [...new Set(books?.map((book) => book.publication_date.slice(0,4)))];

    const handleSearchResult = (event: ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value.toLowerCase();
        const match = books?.filter(book =>
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText) ||
            book.genre.toLowerCase().includes(searchText)
        ) ?? [];
        setSearchResult(match);
        setIsSearching(true);
    }
    return (
        <div>
            <h1 className="text-xl text-center my-4">All Books</h1>
            <div className='flex justify-between items-center my-4'>
                <div className='flex'>
                    <div className="form-control w-36  max-w-xs lg:mr-2">
                        <label className="label">
                            <span className="label-text">Genre</span>
                        </label>
                        <select defaultValue='' className="text-left text-xs rounded-lg text-black select select-bordered select-error w-full max-w-xs" required>
                            <option value="">All Genres</option>
                            {uniqueGenres.map((genre, index) => (
                                <option key={index} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control w-28  max-w-xs lg:mr-2">
                        <label className="label">
                            <span className="label-text">Publication Year</span>
                        </label>
                        <select defaultValue='' className="text-left text-xs rounded-lg text-black select select-bordered select-error w-full max-w-xs" required>
                            <option value="">All Time</option>
                            {uniqueYear.map((publication_year, index) => (
                                <option key={index} value={publication_year}>{publication_year}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-control w-60 mt-9">
                    <input onChange={handleSearchResult} type="text" placeholder="Search Title/Author/Genre" className="input text-xs input-bordered bg-white input-error w-full max-w-xs" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mx-auto">
                <BookCards data={isSearching ? searchResult : books} />
            </div>
        </div>
    );
};

export default AllBooksCard;