import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "base",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL, // общий базовый URL
        prepareHeaders: (headers) => {
            const token = import.meta.env.VITE_AUTH_TOKEN;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Movie"],
    endpoints: () => ({}),
});