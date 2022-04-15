import React from 'react'
import { FCWithChildrenType } from '../@types'
import TodosContextProvider from './TodosContext'

const GlobalContextProvider: React.FC<FCWithChildrenType> = ({ children }) => {
    return <TodosContextProvider>{children}</TodosContextProvider>
}

export default GlobalContextProvider
