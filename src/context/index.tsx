import React from 'react'
import TodosContextProvider from './TodosContext'

const GlobalContextProvider: React.FC = ({ children }) => {
    return <TodosContextProvider>{children}</TodosContextProvider>
}

export default GlobalContextProvider
