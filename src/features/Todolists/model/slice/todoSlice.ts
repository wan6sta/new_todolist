import { TodoInitialState } from '../types/TodoModel'
import { createSlice } from '@reduxjs/toolkit'
import { fetchTodos } from '../services/fetchTodos/fetchTodos'

const initialState: TodoInitialState = {
  data: [],
  isLoading: false,
  error: ''
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.error = ''
        state.isLoading = true
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
  }
})

export const { reducer: todoReducer } = todoSlice
export const { actions: todoActions } = todoSlice
