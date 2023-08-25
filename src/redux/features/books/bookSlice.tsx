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
        getBookByGenre: (state, action: PayloadAction<string>) => {
            const filtering = action.payload;
            if (filtering === 'All Genres') {
                state.filteredBooks = state.books;
            } else {
                state.filteredBooks = state.books.filter(book => book.genre === filtering)
            }
            state.isFilter = true
        },
        getBookByYear: (state, action: PayloadAction<string>) => {
            const filtering = action.payload;
            if (filtering === 'All Time') {
                state.filteredBooks = state.books;
            } else {
                state.filteredBooks = state.books.filter(book => book.publication_date.slice(0, 4) === filtering)
            }
            state.isFilter = true;
        }
    },
})


export const { getAllBooks, getBookByGenre,getBookByYear } = bookSlice.actions;
export default bookSlice.reducer;