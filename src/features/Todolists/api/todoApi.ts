import axios, { AxiosResponse } from 'axios'
import { BASE_URL } from 'shared/assets/constants/BASE_URL'
import {
  DefaultResponse,
  TodoModel,
  UpdateTodoTitleArgs
} from '../model/types/TodoModel'

const todoApiInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

export const todoApi = {
  getTodos: () => {
    return todoApiInstance.get<TodoModel[]>('/todo-lists')
  },
  addNewTodo: (title: string) => {
    return todoApiInstance.post<
      undefined,
      AxiosResponse<DefaultResponse<{ item: TodoModel }>>,
      { title: string }
    >('/todo-lists', { title })
  },
  deleteTodo: (todoId: string) => {
    return todoApiInstance.delete<DefaultResponse>(`/todo-lists/${todoId}`)
  },
  updateTodoTitle: ({ todoId, title }: UpdateTodoTitleArgs) => {
    return todoApiInstance.put<
      undefined,
      AxiosResponse<DefaultResponse>,
      { title: string }
    >(`/todo-lists/${todoId}`, {
      title
    })
  }
}
