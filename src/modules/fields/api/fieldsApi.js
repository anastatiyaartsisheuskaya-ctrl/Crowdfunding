import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFields, getFieldDetails } from "../service/fieldsService";

export const fieldsApi = createApi({
  reducerPath: "fieldsApi",
  baseQuery: fakeBaseQuery(),
  keepUnusedDataFor: 300,
  tagTypes: ["Fields"],

  endpoints: (builder) => ({
    getFields: builder.query({
      async queryFn(search = {}) {
        try {
          const fields = await getFields(search);
          return { data: fields };
        } catch (error) {
          return {
            error: {
              message: error.message,
            },
          };
        }
      },
      providesTags: ["Fields"],
    }),

    getFieldDetails: builder.query({
      async queryFn(id) {
        try {
          const field = await getFieldDetails(id);
          return { data: field };
        } catch (error) {
          return {
            error: {
              message: error.message,
            },
          };
        }
      },
      providesTags: (_result, _error, id) => [{ type: "Fields", id }],
    }),
  }),
});

export const { useGetFieldsQuery, useLazyGetFieldDetailsQuery } = fieldsApi;
