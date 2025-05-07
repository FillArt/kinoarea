import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "@/shared/api/customBaseQuery.ts";

export const baseApi = createApi({
    reducerPath: "base",
    baseQuery: customBaseQuery,
    tagTypes: ["Movie"],
    endpoints: () => ({}),
});