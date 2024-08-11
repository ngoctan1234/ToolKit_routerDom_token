// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';

// Thay đổi URL và cấu hình phù hợp với API của bạn
const API_URL = 'http://localhost:8080/api';

export const login = createAsyncThunk('auth/login', async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, { username, password });
    console.log(response.data)
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.log(error.response.data)
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});
export const both = createAsyncThunk('auth/both', async (thunkAPI) => {
  const url= 'http://localhost:8080/api/users/login1';

    await axios.post('http://localhost:8080/api/users/login1', {
      username: '12345',
      password: '12345'
  }, {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  })
  .then(response => {
    console.log('Response:', response.data);
    return response.data; // Trả về dữ liệu từ phản hồi
})
.catch(error =>{
  console.log(error);
})
   
   
  // } catch (error) {
  //   return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  // }
});
export const cate = createAsyncThunk('auth/cate', async (thunkAPI) => {
  const url= 'http://localhost:8080/api/categories?page=0&size=6';
  try {
    console.log("da vao")
    const response = await axios.get(url);
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  // Xóa token hoặc thực hiện các thao tác logout khác
  try {
    // Ví dụ xóa token khỏi localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return {}; // Trả về giá trị trống khi logout thành công
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});
const getFromLocalStorage = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: getFromLocalStorage('user', null),
    token: null,
    refreshToken: null,
    status: 'idle',
    error: null,
    b:null,
    arr:null
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.refreshToken=action.payload.refresh_token
        state.user = action.payload.username;
        // Lưu token vào localStorage
        localStorage.setItem('accessToken', action.payload.token);
        localStorage.setItem('refreshToken', action.payload.refresh_token);
        localStorage.setItem('user', JSON.stringify(action.payload.username));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error; // Giả sử lỗi nằm trong `error`
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'idle';
        state.token = null;
        state.user = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error; // Giả sử lỗi nằm trong `error`
      })
      .addCase(both.fulfilled, (state, action) => {
        state.b = action.payload
        
      })
      .addCase(cate.fulfilled, (state, action) => {
        state.arr = action.payload
        
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
