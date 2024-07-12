import { baseApi } from "./base"
import { User } from '../interfaces'

export const usersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getUsers: build.query<User[], void>({
      query: () => ({ url: '/users' })
    })
  })
})

export const { useGetUsersQuery } = usersApi