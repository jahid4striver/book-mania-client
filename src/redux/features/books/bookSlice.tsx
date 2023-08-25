import { IBook } from "@/interfaces/bookInterface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBookState {
    books: IBook[],
    filteredBooks: IBook[],
    isFilter: boolean;
}

const initialState: IBookState = {
    books: [],
    filteredBooks: [],
    isFilter: false,
}

const bookSlice = createSlice({
    name: 'bookSlice',
    initialState,
    reducers: {
        getAllBooks: (state, action: PayloadAction<IBook[]>) => {
            state.books = action.payload;
        },
        getBookByGenre: (state, action) => {
            const { genre, year } = action.payload;

            if (!genre && !year) {
                state.filteredBooks = state.books;
            } else if (genre === 'All Genres') {
                state.filteredBooks = state.books;
            } else {
                const filteredByGenre = state.books.filter(book =>
                    book.genre === genre && (!year || book.publication_date.slice(0, 4) === year)
                );
                state.filteredBooks = filteredByGenre;
            }

            state.isFilter = true;
        },
        getBookByYear: (state, action) => {
            const { genre, year } = action.payload;
            if (!year && !genre) {
                state.filteredBooks = state.books;
            } else if (year === 'All Time') {
                state.filteredBooks = state.books;
            } else {
                const filteredByYear = state.books.filter(book =>
                    book.publication_date.slice(0, 4) === year && (!genre || book.genre === genre)
                );
                state.filteredBooks = filteredByYear;
            }

            state.isFilter = true;
        },
        resetFilters: (state) => {
            state.filteredBooks = state.books;
            state.isFilter = false;
        }
    },

})


export const { getAllBooks, getBookByGenre, getBookByYear, resetFilters } = bookSlice.actions;
export default bookSlice.reducer;