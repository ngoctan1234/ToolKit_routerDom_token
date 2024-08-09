// import { createSlice } from '@reduxjs/toolkit';

// // Khởi tạo trạng thái ban đầu
// const initialState = {
//   value: 0,
// };

// // Tạo slice
// const countSlice = createSlice({
//   name: 'count',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.value += 1; // Tăng giá trị lên 1
//     },
//     decrement(state) {
//       state.value -= 1; // Giảm giá trị đi 1
//     },
//     incrementByAmount(state, action) {
//       state.value += action.payload; // Tăng giá trị theo số lượng truyền vào
//     },
//   },
// });

// // Xuất các actions
// export const { increment, decrement, incrementByAmount } = countSlice.actions;

// // Xuất reducer
// export default countSlice.reducer;