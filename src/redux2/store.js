import { configureStore } from '@reduxjs/toolkit';
import countReducer from './countSlice';
import userReducer from './userSlice';
import studentSlice from './studentSlice';
import listSlice from './listSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import todolistSlice from './todolistSlice';
import catsSlice from './catsSlice';
import authSlice from './authSlice';


const store=configureStore({
    reducer:{
        // count:countReducer,
        // user:userReducer,
        // student:studentSlice,
        // students:listSlice,
        // products:productSlice,
        // cart:cartSlice,
        // todos:todolistSlice,
        // cats:catsSlice,
        auth:authSlice
    }
})
export default store


