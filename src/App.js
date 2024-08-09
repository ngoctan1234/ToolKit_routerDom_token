
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Cart from './components/Cart';
import Cats from './components/Cats';
import Exam1 from './components/Exam1';
import Exam2 from './components/Exam2';
import Exam3 from './components/Exam3';
import Exam4 from './components/Exam4';
import Exam5 from './components/Exam5';
import ProductsList from './components/ProductsList';
import ToDoList from './components/ToDoList';
import Todos from './components/Todos';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components2/Home';
import LoginForm from './components2/LoginForm';
import Both from './components2/Both';

function App() {
  const currentItems = 1;
  const [currentPage,setCurrentPage]=useState(1)
  const pageCount = 30;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(event.selected)
  };
  return (
    <div className="App">

          <Router>
                
                <Routes>
                    <Route path="/login" element={<LoginForm />}></Route>
                    <Route index element={<Home />}></Route>
                    <Route path="/both" element={<Both />}></Route>
                </Routes>
            </Router>
           
            
    
    </div>
    
  );
}

export default App;
