import React, { createContext, useState } from 'react'

import { TodoItemType } from '../../@types'

type TodosContextType = {
    todos: TodoItemType[]
    setTodos: (todos: TodoItemType[]) => void
}

const INITIAL_STATE: TodosContextType = {
    todos: [],
    setTodos: () => {},
}

export const TodosContext = createContext(INITIAL_STATE)

const TodosContextProvider: React.FC = ({ children }) => {
    const [todos, setTodos] = useState<TodoItemType[]>([])

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider
