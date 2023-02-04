import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// 2 Adapt interface
export interface CounterState {
  counter: number
  name: string
  isOpen: boolean
  city: string

  currentValue: string
  todos: ITodo[]
}

interface ITodo {
  id: number
  value: string
  completed: boolean
}

// 1 Set variable you need
const initialState: CounterState = {
  counter: 10,
  name: 'Sandro',
  isOpen: false,
  city: 'Berlin',
  currentValue: '',
  todos: [
    {
      id: 0,
      value: 'Submitted first time',
      completed: false,
    },
    {
      id: 2,
      value: 'Submitted first time',
      completed: false,
    },
  ],
}

export const counterSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    // 3 Add method
    toggleCompletedStatus: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo: ITodo) => todo.id === action.payload)

      if (index === -1) {
        return
      }

      state.todos[index].completed = !state.todos[index].completed
    },

    toggleDialog: (state) => {
      state.isOpen = !state.isOpen
    },

    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const index = state.todos.findIndex((todo: ITodo) => todo.id === action.payload.id)

      if (index === -1) return

      state.todos[index].value = action.payload.value
    },

    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload)
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo: ITodo) => todo.id !== action.payload)
    },

    increment: (state) => {
      state.counter = state.counter + 1
      state.name = 'hello'
    },

    decrement: (state) => {
      state.counter -= 1
    },

    // With payload
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload
    },

    // City
    changeCity: (state) => {
      state.city = 'Frankfurt'
    },

    updateCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const counterAction = counterSlice.actions

export default counterSlice.reducer
