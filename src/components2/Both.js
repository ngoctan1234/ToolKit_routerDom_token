// src/components/LoginForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { both } from '../redux2/authSlice';
import { useNavigate } from "react-router-dom";
const Both = () => {
  const dispatch = useDispatch();
  const {b } = useSelector((state) => state.auth);
  const navigate=useNavigate()
  useEffect(()=>{
    dispatch(both())
  })



  return (
   <div>
    <h1>Both: {b}</h1>
   </div>
  );
};

export default Both;