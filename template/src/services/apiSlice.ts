import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from 'configs';

import {logOut, setCredentials} from 'features';
import {RootState} from 'src/redux/Store';
import {getItem, setItem} from 'utils';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,

  prepareHeaders: (headers: Headers, {getState}: {getState: () => unknown}) => {
    const {token} = (getState() as RootState).auth;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth = async (
  args?: any, // Arguments for the query
  api?: any, // API object (possibly Redux store or similar)
  extraOptions?: any, // Extra options for the query
) => {
  console.log('args>>', args);
  console.log('api>>', api);
  // Make the initial query
  let result = await baseQuery(args, api, extraOptions);
  console.log('result', result);

  // Check if the result contains an error with status code 401 (Unauthorized)
  if (result?.error?.status === 401) {
    console.log('sending refresh token');
    // Send a request to refresh the access token
    const refreshResult = await (console.log(
      'refreshToken',
      await getItem('refreshToken'),
    ),
    await fetch(`${BASE_URL}auth/get-access-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: await getItem('refreshToken'),
      }),
    })).json();

    console.log('refreshResult', refreshResult);

    // If the refresh was successful, update the token and retry the original query
    if (refreshResult?.data) {
      // Update the token in the store
      api.dispatch(setCredentials({token: refreshResult?.ACCESS_TOKEN!}));
      // Update the token in local storage
      setItem('accessToken', refreshResult?.ACCESS_TOKEN!);
      // Retry the original query with the new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // If the refresh failed, log the user out and update their status
      api.dispatch(logOut());
      setItem('isLoggedIn', 'false');
    }
  }

  return result; // Return the result of the query
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
});
