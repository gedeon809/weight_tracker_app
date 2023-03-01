// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Weight,
  SignInInput,
  SignUpInput,
  AddWeightInput,
  UpdateWeightInput,
  AuthResponse,
  DeleteWeightInput,
} from "./types";

//const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT;
// Define a service using a base URL and expected endpoints
export const weightApi = createApi({
  reducerPath: "weightApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://weightapp-apis.onrender.com/api/`,
    prepareHeaders: (headers) => {
        headers.set("Access-Control-Allow-Origin", "*");
        return headers;
      },
  }),
  tagTypes: ["Weight"],
  endpoints: (builder) => ({
    getAllWeight: builder.query({
      query: () => `weight/get_weight_history`,
      providesTags: ['Weight']
    }),

    addWeight: builder.mutation<Weight, AddWeightInput>({
      query: (weight) => ({
        url: `weight/save_weight`,
        method: "POST",
        body: weight,
      }),
      invalidatesTags: ['Weight']
    }),

    updateWeight: builder.mutation<Weight, UpdateWeightInput>({
      query: ({ id, ...rest }) => ({
        url: `weight/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ['Weight']
    }),

    deleteWeight: builder.mutation<Weight, DeleteWeightInput>({
      query: (id) => ({
        url: `weight/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Weight']
    }),
  }),
});

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://weightapp-apis.onrender.com/api/`,
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, SignInInput>({
      query: (input) => ({
        url: "auth/login",
        method: "POST",
        body: input,
      }),
    }),
    signUp: builder.mutation<void, SignUpInput>({
      query: input => ({
        url: "auth/sign_up",
        method: "POST",
        body: input,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllWeightQuery,
  useAddWeightMutation,
  useUpdateWeightMutation,
  useDeleteWeightMutation,
} = weightApi;
export const { useSignInMutation, useSignUpMutation } = authApi;
