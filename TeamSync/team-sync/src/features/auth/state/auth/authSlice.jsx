// import {createSlice} from '@reduxjs/toolkit'
// import { currentLoggedEmployee, loginEmployee , registerEmployee } from './authAction';

// let authSlice = createSlice({
//     name:'auth',
//     initialState:{
//         employee : null,
//         isLoading : false,
//     },
//     reducers:{
//         addEmployee(state,action){
//             state.employee = action.payload;
//             state.isLoading = false;
//         },
//         removeEmployee(state){
//             state.employee = null;
//             state.isLoading = false;
//         },
//     },
//     extraReducers : (builder)=>{
//         builder.addCase(loginEmployee.pending,(state)=>{
//             state.isLoading = true;
//         })
//         .addCase(loginEmployee.fulfilled,(state,action)=>{
//             state.employee = action.payload;
//             state.isLoading = false;
//         })
//         .addCase(loginEmployee.rejected,(state)=>{
//             state.isLoading = false;
//         })
//         .addCase(currentLoggedEmployee.pending,(state)=>{
//             state.isLoading = true;
//         })
//         .addCase(currentLoggedEmployee.fulfilled,(state,action)=>{
//             state.employee = action.payload;
//             state.isLoading = false;
//         })
//         .addCase(currentLoggedEmployee.rejected,(state)=>{
//             state.isLoading = false;
//         })
//     }
// });

// export let {addEmployee,removeEmployee} = authSlice;
// export default authSlice.reducer; 
 
import { createSlice } from "@reduxjs/toolkit";

import {
  currentLoggedEmployee,
  loginEmployee,
  registerEmployee,
} from "./authAction";

let authSlice = createSlice({
  name: "auth",

  initialState: {
    employee: null,
    isLoading: false,
     isAuthChecked: false,
  },

  reducers: {
    addEmployee(state, action) {
      state.employee = action.payload;
      state.isLoading = false;
    },

    removeEmployee(state) {
      state.employee = null;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    // LOGIN
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })
      .addCase(loginEmployee.rejected, (state) => {
        state.isLoading = false;
      });

    // REGISTER
    builder
      .addCase(registerEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })
      .addCase(registerEmployee.rejected, (state) => {
        state.isLoading = false;
      });

    // CURRENT USER
    builder
      .addCase(currentLoggedEmployee.pending, (state) => {
        state.isAuthChecked = false;
      })
      .addCase(currentLoggedEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(currentLoggedEmployee.rejected, (state) => {
        state.isAuthChecked = true;
      });
  },
});

export let { addEmployee, removeEmployee } = authSlice.actions;

export default authSlice.reducer;