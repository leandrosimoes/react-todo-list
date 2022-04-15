import React, { createContext, useState } from 'react'
import uuid from 'react-uuid'

import { FCWithChildrenType, TodoItemType } from '../../@types'

type TodosContextType = {
    todos: TodoItemType[]
    errorMessage: string
    setTodos: (todos: TodoItemType[]) => void
    addTodo: (text: string) => boolean
    toggleTodoCompleted: (id: string) => void
    deleteTodo: (id: string) => void
}

const INITIAL_STATE: TodosContextType = {
    todos: [],
    errorMessage: '',
    setTodos: () => {},
    addTodo: () => false,
    toggleTodoCompleted: () => {},
    deleteTodo: () => {},
}

export const TodosContext = createContext(INITIAL_STATE)

const TodosContextProvider: React.FC<FCWithChildrenType> = ({ children }) => {
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

    const toggleTodoCompleted = (id: string) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) todo.isDone = !todo.isDone

                return { ...todo }
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
                toggleTodoCompleted,
                addTodo,
                deleteTodo,
                errorMessage,
            }}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider
