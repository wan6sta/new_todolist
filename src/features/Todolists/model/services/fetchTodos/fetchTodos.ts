import { createAsyncThunk } from '@reduxjs/toolkit'
import { todoApi } from '../../../api/todoApi'

interface ThunkConfig {
  rejectValue: { errors: string[] }
}

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const res = await todoApi.getTodos()
      return res.data
    } catch (e) {
      console.log(e)
      rejectWithValue(e)
    }
  }
)
