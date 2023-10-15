import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const api = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://book-mania-server.clearsoftwares.xyz/' }),
    tagTypes:['updatebook','deletebook','postreview','postwishlist','updatewishlist'],
    endpoints: () => ({ }),
})

export default api;