// import { createSlice } from '@reduxjs/toolkit';

// // Khởi tạo trạng thái ban đầu
// const initialState = {
//   todos: [{id:1,name:"mèo"},{id:2,name:"Nai"}],
// };

// // Tạo slice
// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo(state, action) {
//       state.todos.push({
//         id: Date.now(), // Hoặc sử dụng một ID khác
//         text: action.payload,
//         completed: false,
//       });
//     },
//     removeTodo(state, action) {
//       state.todos = state.todos.filter(todo => todo.id !== action.payload);
//     },
//     toggleTodo(state, action) {
//       const todo = state.todos.find(todo => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     }
//   }
// });

// // Xuất các actions
// export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

// // Xuất reducer
// export default todoSlice.reducer;
