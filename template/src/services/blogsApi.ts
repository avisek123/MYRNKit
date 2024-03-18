import {apiSlice} from './apiSlice';

// Defining the blogsApi using the injectEndpoints method from apiSlice
export const blogsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBlogs: builder.query({
      query: () => 'products',
    }),
  }),
});

export const {useGetBlogsQuery} = blogsApi;
