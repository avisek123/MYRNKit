import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  user: null;
  token: string | null;
  isLoggedIn: boolean | null;
  refreshToken: string | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    refreshToken: null,
  } as AuthState,
  reducers: {
    setCredentials: (state, action) => {
      //   console.log('payload', action?.payload);
      const {token, refreshToken} = action.payload;

      state.token = token;
      state.refreshToken = refreshToken;
    },
    logOut: state => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.refreshToken = null;
    },
    logIn: state => {
      state.isLoggedIn = true;
    },
  },
});

export const {setCredentials, logOut, logIn} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectCurrentToken = (state: any) => state.auth.token;
