import api from "@/redux/api/apiSlice";


const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books'
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`
        }),
        postBook: builder.mutation({
            query: (data) => ({
                url: '/book',
                method: 'POST',
                body: data,
            })
        }),
        updateBook: builder.mutation({
            query: ({ data, id }) => ({
                url: `/book/${id}`,
                method: 'PUT',
                body: data,
            })
        })
    })
});

export const { useGetBooksQuery, useGetSingleBookQuery, usePostBookMutation, useUpdateBookMutation } = bookApi;