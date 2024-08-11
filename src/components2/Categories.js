// src/components/LoginForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cate } from '../redux2/authSlice';
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const dispatch = useDispatch();
  const {arr} = useSelector((state) => state.auth);
  const navigate=useNavigate()
  useEffect(()=>{
    dispatch(cate())
  },[])



  return (
   <div>
    <h1>List </h1>
    {
        arr&&arr.map((item,index)=>(
            <p key={index}>{item.name}</p>
        ))
    }
    
   </div>
  );
};

export default Categories;