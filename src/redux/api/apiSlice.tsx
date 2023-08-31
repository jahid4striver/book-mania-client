import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const api = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://clearsoftwares.xyz/' }),
    tagTypes:['updatebook','deletebook','postreview'],
    endpoints: () => ({ }),
})

export default api;