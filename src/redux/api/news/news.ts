import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { New} from '../../types'

const baseUrl = 'https://frontappapi.dock7.66bit.ru/api/news/'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query<New[], number>({
      query: (page: number) => `get?page=${page}&count=10`,
     
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
        console.log('w',newItems)
      },
     
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    })
  })
});

export const {useGetNewsQuery} = newsApi;
