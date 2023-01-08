export interface TodoModel {
  id: string
  title: string
  order: number
  addedDate: string
}

export interface DefaultResponse<T = {}> {
  resultCode: number
  messages: string[]
  fieldsErrors: string[]
  data: T
}

export interface UpdateTodoTitleArgs {
  todoId: string
  title: string
}

export interface TodoInitialState {
  error: string
  isLoading: boolean
  data: TodoModel[]
}
