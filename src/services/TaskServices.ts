// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Task } from '@/models/Task';
import { HYDRATE } from 'next-redux-wrapper';

// Define a service using a base URL and expected endpoints
export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Task'],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTaskById: builder.query<Task, string>({
      query: (id) => `task/${id}`,
    }),
    getAllTasks: builder.query<Task[], undefined>({
      query: () => 'task',
      transformResponse: (response: { data: Task[] }) => response.data,
    }),
    createTask: builder.mutation<Task, Partial<Task> & Pick<Task, 'id'>>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (task) => ({
        url: `/task`,
        method: 'POST',
        body: task,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: { data: Task }, meta, arg) => response.data,
      // Pick out errors and prevent nested properties in a hook or selector
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
      invalidatesTags: ['Task'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useGetAllTasksQuery,
} = taskApi;
