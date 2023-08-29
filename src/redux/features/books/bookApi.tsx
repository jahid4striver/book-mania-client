import api from "@/redux/api/apiSlice";


const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
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
            }),
            invalidatesTags: ['updatebook']
        }),
        deleteBook:builder.mutation({
            query:(id)=>({
                url:`/book/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['deletebook']
        }),
        getBooks: builder.query({
            query: () => '/books',
            providesTags:['updatebook','deletebook']
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`,
            providesTags: ['updatebook','deletebook']
        }),
    })
});

export const { useGetBooksQuery, useGetSingleBookQuery, usePostBookMutation,
    useDeleteBookMutation, useUpdateBookMutation } = bookApi;