import { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

const useTodos = () => {
    const { todos, setTodos } = useContext(TodosContext)

    return {
        todos: todos.sort((a, b) => (a.createdAt <= b.createdAt ? 1 : -1)),
        setTodos,
    }
}

export default useTodos
