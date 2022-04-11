import React, { createContext, useState } from 'react'
import uuid from 'react-uuid'

import { TodoItemType } from '../../@types'

type TodosContextType = {
    todos: TodoItemType[]
    setTodos: (todos: TodoItemType[]) => void
    addTodo: (text: string) => void
    completeTodo: (id: string) => void
    deleteTodo: (id: string) => void
}

const INITIAL_STATE: TodosContextType = {
    todos: [],
    setTodos: () => {},
    addTodo: () => {},
    completeTodo: () => {},
    deleteTodo: () => {},
}

export const TodosContext = createContext(INITIAL_STATE)

const TodosContextProvider: React.FC = ({ children }) => {
    const [todos, setTodos] = useState<TodoItemType[]>([])

    const addTodo = (text: string) => {
        if (!text) {
            alert('Error')
            return
        }

        const newTodo: TodoItemType = {
            id: uuid(),
            text,
            isDone: false,
            createdAt: new Date(),
        }

        setTodos([newTodo, ...todos])
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
            }}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider
