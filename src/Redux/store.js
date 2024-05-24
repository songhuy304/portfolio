import { configureStore } from '@reduxjs/toolkit'
import todoReducer  from './reducer'
import authReducer  from './reducerAuth'
export const store = configureStore({
    reducer: {
      todos: todoReducer, // Đưa todoReducer vào cấu hình store
      auth: authReducer // Đưa todoReducer vào cấu hình store
    }
  });