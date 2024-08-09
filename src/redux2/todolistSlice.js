import { createSlice ,createAsyncThunk, current} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    todos:[],
    currentPage:1,
    status:"start",
    error:null

}
        
const url="https://66a077917053166bcabb8106.mockapi.io/student1"
export const fetchTodos =createAsyncThunk('todos/fetchTodos',async (page)=>{
    const res=await axios.get(`${url}?page=${page}&limit=5`);
    return res.data;
})
export const deleteTodo=createAsyncThunk('todos/deleteTodo',async (id)=>{
    await axios.delete(url+"/"+id)
    return id;
})
export const addTodo=createAsyncThunk('todos/addTodo',async (todo)=>{
    const res = await axios.post(url,todo)
    return res.data;
})
export const reCheckedTodo=createAsyncThunk('todos/reCheckedTodo',async (todo)=>{
   const res= await axios.put(url+"/"+todo.id,{...todo,checked:!todo.checked})
    return res.data;
})
const todolist=createSlice({
    name:"todos",
    initialState,
    reducers:{
        changeCurrentPage(state,action){
            state.currentPage=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodos.pending,(state)=>{
            state.state="loading"
        })
        .addCase(fetchTodos.rejected,(state,action)=>{
            state.status="failed";
            state.status=action.error.message
        })
        .addCase(fetchTodos.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.todos=action.payload
           
        })
        .addCase(addTodo.fulfilled,(state,action)=>{
            state.todos=[...state.todos,action.payload]
        })
        .addCase(deleteTodo.fulfilled,(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload);
        })
        .addCase(reCheckedTodo.fulfilled,(state,action)=>{
            state.todos=state.todos.map(item=>item.id===action.payload.id?{...item,checked:!item.checked}:item)
        })
    }
})

export const {changeCurrentPage} = todolist.actions
export default todolist.reducer;


