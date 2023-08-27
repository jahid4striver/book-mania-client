import api from "@/redux/api/apiSlice";


const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books'
        }),
        postBook: builder.mutation({
            query: (data) => ({
                url: '/book',
                method: 'POST',
                body: data,
            })
        })
    })
});

export const { useGetBooksQuery, usePostBookMutation } = bookApi;