import { baseApi } from "./base"
import { Post } from '../interfaces'

export const postsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<Post[], void>({
      query: () => ({ url: '/posts' })
    })
  })
})

export const { useGetPostsQuery } = postsApi