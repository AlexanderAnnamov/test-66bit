import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Theme, ParamsTheme } from '../../types'

const baseUrl = 'https://frontappapi.dock7.66bit.ru/api/theme/'

export const themeApi = createApi({
    reducerPath: 'themeApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      getTheme: builder.query<Theme, ParamsTheme>({
        query: (theme) => `get?name=${theme}`,
      }),
    }),
  })

  export const {useGetThemeQuery} = themeApi;