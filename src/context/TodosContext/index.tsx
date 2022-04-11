import React, { createContext, useState } from 'react'
import uuid from 'react-uuid'

import { TodoItemType } from '../../@types'

type TodosContextType = {
    todos: TodoItemType[]
    errorMessage: string
    setTodos: (todos: TodoItemType[]) => void
    addTodo: (text: string) => boolean
    completeTodo: (id: string) => void
    deleteTodo: (id: string) => void
}

const INITIAL_STATE: TodosContextType = {
    todos: [],
    errorMessage: '',
    setTodos: () => {},
    addTodo: () => false,
    completeTodo: () => {},
    deleteTodo: () => {},
}

export const TodosContext = createContext(INITIAL_STATE)

const TodosContextProvider: React.FC = ({ children }) => {
    const [todos, setTodos] = useState<TodoItemType[]>([])
    const [errorMessage, setErrorMessage] = useState('')

    const addTodo = (text: string) => {
        setErrorMessage('')

        if (!text) {
            setErrorMessage('Todo text is required')
            return false
        }

        if (text.length < 10) {
            setErrorMessage('Todo text must have at least 10 chars')
            return false
        }

        const newTodo: TodoItemType = {
            id: uuid(),
            text,
            isDone: false,
            createdAt: new Date(),
        }

        setTodos([newTodo, ...todos])

        return true
    }

    const completeTodo = (id: string) => {
        setTodos(
            todos.map((todo) => {
                return { ...todo, isDone: todo.isDone || todo.id === id }
            })
        )
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <TodosContext.Provider
            value={{
                todos: todos.sort((a, b) =>
                    a.createdAt <= b.createdAt ? 1 : -1
                ),
                setTodos,
                completeTodo,
                addTodo,
                deleteTodo,
                errorMessage,
            }}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider
