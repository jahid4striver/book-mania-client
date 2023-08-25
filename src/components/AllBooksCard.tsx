import { ChangeEvent, useState } from 'react'
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import BookCards from "./ui/BookCards";
import { IBook } from '@/interfaces/bookInterface';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { getAllBooks, getBookByGenre, getBookByYear } from '@/redux/features/books/bookSlice';
import { useEffect } from 'react'

const AllBooksCard = () => {
    const [searchResult, setSearchResult] = useState<IBook[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const { data } = useGetBooksQuery(undefined);
    const allbooks: IBook[] | undefined = data?.data;
    const dispatch = useAppDispatch();
    const { books, filteredBooks, isFilter } = useAppSelector((state) => state.bookSlice);


    useEffect(() => {
        if (allbooks) {
            dispatch(getAllBooks(allbooks))
        }
    }, [dispatch, allbooks])

    const uniqueGenres: string[] = [...new Set(allbooks?.map((book) => book.genre))];
    const uniqueYear: string[] = [...new Set(allbooks?.map((book) => book.publication_date.slice(0, 4)))];

    const handleSearchResult = (event: ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value.toLowerCase();
        const match = filteredBooks?.filter((book) =>
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText) ||
            book.genre.toLowerCase().includes(searchText)
        ) ?? [];
        setSearchResult(match);
        setIsSearching(true);
    }

    const handleGenreFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        const genre = event.target.value;
        dispatch(getBookByGenre(genre));
        setSearchResult([]); // Reset search results
        setIsSearching(false);

    }
    const handleYearFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        const genre = event.target.value;
        dispatch(getBookByYear(genre));
        setSearchResult([]); // Reset search results
        setIsSearching(false);

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
                        <select onChange={handleGenreFilter} defaultValue='' className="text-left text-xs rounded-lg text-black select select-bordered select-error w-full max-w-xs" required>
                            <option value="All Genres">All Genres</option>
                            {uniqueGenres.map((genre, index) => (
                                <option key={index} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control w-28  max-w-xs lg:mr-2">
                        <label className="label">
                            <span className="label-text">Publication Year</span>
                        </label>
                        <select onChange={handleYearFilter} defaultValue='' className="text-left text-xs rounded-lg text-black select select-bordered select-error w-full max-w-xs" required>
                            <option value="All Time">All Time</option>
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
                <BookCards data={isSearching ? searchResult : (isFilter ? filteredBooks : books)} />
            </div>
        </div>
    );
};

export default AllBooksCard;