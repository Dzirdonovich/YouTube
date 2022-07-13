import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videosApi = createApi({
  reducerPath: "videosApi",
  tagTypes: ["Videos"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4200/" }),
  endpoints: (build) => ({
    getVideos: build.query({
      query: () => "videos",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Videos", id })),
              { type: "Videos", id: "LIST" },
            ]
          : [{ type: "Videos", id: "LIST" }],
    }),
    addVideos: build.mutation({
      query: (body) => ({
        url: "videos",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Videos", id: "LIST" }],
    }),
  }),
});

export const { useGetVideosQuery, useAddVideosMutation } = videosApi;
