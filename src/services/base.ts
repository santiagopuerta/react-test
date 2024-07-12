import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_URL } from '../configs'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: () => ({})
})