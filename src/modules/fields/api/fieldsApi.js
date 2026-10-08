import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFields } from "../service/fieldsService.js";

export const fieldsApi = createApi({
  reducerPath: "fieldsApi",
  baseQuery: fakeBaseQuery(),
  keepUnusedDataFor: 300,

  endpoints: (builder) => ({
    getFields: builder.query({
      async queryFn() {
        try {
          const data = await getFields();

          return { data };
        } catch (error) {
          return {
            error: {
              status: "FIRESTORE_ERROR",
              error: error.message,
            },
          };
        }
      },
    }),
  }),
});

export const { useGetFieldsQuery } = fieldsApi;
