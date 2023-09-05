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
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['deletebook']
        }),
        postReview: builder.mutation({
            query: ({ id, review }) => ({
                url: `/review/${id}`,
                method: 'POST',
                body: review,
            }),
            invalidatesTags: ['postreview']
        }),
        postWishlist: builder.mutation({
            query: (data) => ({
                url: `/wishlist`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags:['postwishlist'],
        }),
        updateWishlist:builder.mutation({
            query:({data,id})=>({
                url:`/wishlist/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags:['updatewishlist']
        }),
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ['updatebook', 'deletebook', 'postreview','postwishlist']
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`,
            providesTags: ['updatebook', 'deletebook', 'postreview','postwishlist']
        }),
        getWishlist:builder.query({
            query:()=>'/wishlists',
            providesTags:['postwishlist','updatewishlist'],
        })
    })
});

export const { useGetBooksQuery, useGetSingleBookQuery, usePostBookMutation,
    useDeleteBookMutation, useUpdateBookMutation, usePostReviewMutation,
    usePostWishlistMutation, useGetWishlistQuery,useUpdateWishlistMutation } = bookApi;