import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "learn Redux" },
    { id: 2, name: "learn Nexx" },
  ];
 const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo(state, action){
            state.push(action.payload);
        },
        removeTodo(state, action){
            state.splice(action.payload,1)
        }
    }
 })

 export const { addTodo, removeTodo } = todoSlice.actions
 export default todoSlice.reducer