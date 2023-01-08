import axios, { AxiosResponse } from 'axios'
import { BASE_URL } from 'shared/assets/constants/BASE_URL'
import {
  AddNewTask,
  ChangeTask,
  DeleteTask,
  GetTasksResponse,
  TaskModel,
  TasksResponse,
  UpdateTaskModel
} from '../models/types/taskModel'

const taskApiInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

export const taskApi = {
  getTasks: (todoId: string) => {
    return taskApiInstance.get<GetTasksResponse<TaskModel[]>>(
      `/todo-lists/${todoId}/tasks`
    )
  },
  addNewTask: ({ todoId, title }: AddNewTask) => {
    return taskApiInstance.post<
      undefined,
      AxiosResponse<TasksResponse<{ item: TaskModel }>>,
      { title: string }
    >(`/todo-lists/${todoId}/tasks`, { title })
  },
  deleteTask: ({ todoId, taskId }: DeleteTask) => {
    return taskApiInstance.delete<TasksResponse>(
      `/todo-lists/${todoId}/tasks/${taskId}`
    )
  },
  updateTask: ({ todoId, taskId, newTask }: ChangeTask) => {
    return taskApiInstance.put<
      undefined,
      AxiosResponse<TasksResponse<{ item: TaskModel }>>,
      UpdateTaskModel
    >(`/todo-lists/${todoId}/tasks/${taskId}`, newTask)
  }
}
