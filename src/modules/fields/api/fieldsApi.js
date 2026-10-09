import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFields } from "../service/fieldsService";

export const fieldsApi = createApi({
  reducerPath: "fieldsApi",
  baseQuery: fakeBaseQuery(),
  keepUnusedDataFor: 3000,
  tagTypes: ["Fields"],

  endpoints: (builder) => ({
    getFields: builder.query({
      async queryFn(search) {
        try {
          console.log("ask", search);
          const fields = await getFields(search);
          console.log("fields", fields);
          return { data: fields };
        } catch (error) {
          console.log(error);
          return {
            error: {
              message: error.message,
            },
          };
        }
      },
      providesTags: ["Fields"],
    }),
  }),
});

export const { useGetFieldsQuery } = fieldsApi;
