
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { RootState } from '@/app/store'; // путь к store

const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
        const token = import.meta.env.VITE_AUTH_TOKEN;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const customBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
    const state = api.getState() as RootState;
    const language = state.App.language;

    if (typeof args === 'object' && args.params) {
        args.params = {
            ...args.params,
            language,
        };
    } else if (typeof args === 'object') {
        args = {
            ...args,
            params: { language },
        };
    }

    return rawBaseQuery(args, api, extraOptions);
};
