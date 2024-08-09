import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state for products
const initialState = {
  items: [],
  status: 'start',
  error: null,
};
// axios.get(url)
// .then()
// .catch
// const  meo = async()=>{
//    await//các phép toán xử lí bay1t1 đồng bộ: Promise
// }
// Define an async thunk for fetching products from an API
//name/action_creator
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://66a077917053166bcabb8106.mockapi.io/student');
  return response.data;
});

// Create the products slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the async thunk and the slice reducer
export default productsSlice.reducer;