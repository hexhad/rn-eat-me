import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosInstance';
import {API} from '../../constants/endpoints';
import {RootNavigation} from '../../navigation/rootNavigation';

const initialState = {
  isLogged: false,
  token: null,
  error: null,
  loading: false,
};

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async ({username, password}) => {
    const res = await axiosInstance.post(API.AUTH, {
      // username: 'kminchelle',
      // password: '0lelplR',
      username,
      password,
    });
    return await res.data.token;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      RootNavigation.popToTop();
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAuth.pending, state => ({
      loading: true,
    }));
    builder.addCase(fetchAuth.fulfilled, (state, action) => ({
      loading: false,
      isLogged: true,
      token: action.payload,
    }));
    builder.addCase(fetchAuth.rejected, (state, action) => ({
      token: null,
      isLogged: false,
      loading: false,
      error: action.error.message,
    }));
  },
});

export const {logOut} = authSlice.actions;
export default authSlice.reducer;
