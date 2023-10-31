import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {dummyData} from '../../constants/dummyData';
import {delayFor} from '../../utils/shortHands';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    await delayFor();
    return dummyData;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, state => ({
      loading: true,
    }));
    builder.addCase(fetchProduct.fulfilled, (state, action) => ({
      loading: false,
      data: action.payload,
    }));
    builder.addCase(fetchProduct.rejected, (state, action) => ({
      loading: false,
      data: [],
    }));
  },
});

export default productSlice.reducer;
