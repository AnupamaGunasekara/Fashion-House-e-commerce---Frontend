import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/baseURL";

const statsApi = createApi({
  reducerPath: "statsApi", // Fixed reducerPath name
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl}/api/stats`, // Fixed baseUrl syntax
    credentials: "include", // Fixed "credentials" spelling
  }),
  tagTypes: ["Stats"], // Fixed capitalization
  endpoints: (builder) => ({
    getUserStats: builder.query({
      query: (email) => `/user-stats/${email}`, // Corrected query syntax
      providesTags: ["Stats"], // Fixed capitalization
    }),
    getAdminStats: builder.query({
      query: () => `/admin-stats`,
      providesTags: ["Stats"],
    }),
  }),
});


export const { useGetUserStatsQuery, useGetAdminStatsQuery } = statsApi; 
export default statsApi;
