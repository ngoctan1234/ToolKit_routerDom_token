import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos ,addTodo,deleteTodo,reCheckedTodo,changeCurrentPage} from '../redux2/todolistSlice'
import ReactPaginate from 'react-paginate';

export default function Todos() {
    const total=30;
    const limit=5;
  const handlePageClick = (event) => {
    //setCurrentPage(event.selected);
    dispatch(changeCurrentPage(event.selected))
  };
    const dispatch=useDispatch()
    const {todos,status,error,currentPage}=useSelector((state)=>state.todos)
     useEffect(()=>{
    
            dispatch(fetchTodos(currentPage))
        
      
     },[dispatch,currentPage])
    
    const handle_add=(todo)=>{
        dispatch(addTodo(todo))
    }
    const handle_rechecked=(todo)=>{
        dispatch(reCheckedTodo(todo))
    }
    const handle_delete=(id)=>{
        dispatch(deleteTodo(id))
    }

  return (
    <div>
        todolist
        <button onClick={()=>handle_add({id:6,name:"Meo Meo",checked:false})}>handle add</button>
      {
       todos.map((item,index)=>
            <div key={index}>
                <span>{item.id}</span>
                <p className={item.checked?"student-name active":"student-name"} onClick={()=>handle_rechecked(item)}>{item.name}</p>
                <button onClick={()=>handle_delete(item.id)} className='btn btn-danger'>Delete</button>
            </div>
        )
      }
<button onClick={()=>dispatch(changeCurrentPage(2))}>page 2</button>
<button onClick={()=>dispatch(changeCurrentPage(3))}>page 3</button>
<button onClick={()=>dispatch(changeCurrentPage(4))}>page 4</button>
<ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(total / limit)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
      
    </div>
  )
}
