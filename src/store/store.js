import { configureStore } from "@reduxjs/toolkit";
import { fieldsApi } from "../modules/fields/api/fieldsApi.js";
import { authApi } from "../modules/auth/api/authApi.js";

export const store = configureStore({
  reducer: {
    [fieldsApi.reducerPath]: fieldsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fieldsApi.middleware)
      .concat(authApi.middleware),
});
