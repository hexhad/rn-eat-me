import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosInstance';
import {API} from '../../constants/endpoints';
import {RootNavigation} from '../../navigation/rootNavigation';
import {AUTH} from '../types';

const initialState = {
  isLogged: false,
  token: null,
  error: null,
  loading: false,
  user: {
    loading: false,
    error: false,
    data: [],
  },
};

export const fetchAuth = createAsyncThunk(
  AUTH.FETCH,
  async ({username, password}, {getState, dispatch}) => {
    const res = await axiosInstance.post(API.AUTH, {
      // username: 'kminchelle',
      // password: '0lelplR',
      username,
      password,
    });
    dispatch(fetchUser());
    return res.data.token;
  },
);

export const fetchUser = createAsyncThunk(
  AUTH.USER,
  async (_, {getState, dispatch}) => {
    const res = await axiosInstance.get(`${API.USER}1`);
    return res.data;
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

    builder.addCase(fetchUser.pending, state => ({
      ...state,
      user: {
        loading: true,
        error: false,
        data: [],
      },
    }));
    builder.addCase(fetchUser.fulfilled, (state, action) => ({
      ...state,
      user: {
        loading: false,
        error: false,
        data: action.payload,
      },
    }));
    builder.addCase(fetchUser.rejected, (state, action) => ({
      ...state,
      user: {
        loading: false,
        error: action.payload,
        data: [],
      },
    }));
  },
});

export const {logOut} = authSlice.actions;
export default authSlice.reducer;
