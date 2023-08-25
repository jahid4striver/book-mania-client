import { configureStore } from "@reduxjs/toolkit";
import api from "./api/apiSlice";
import bookSlice from "./features/books/bookSlice";

const store = configureStore({
    reducer: {
        bookSlice: bookSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;