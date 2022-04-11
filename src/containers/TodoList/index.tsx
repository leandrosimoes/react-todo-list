import { useContext } from 'react'
import TodoListItem from '../../components/TodoListItem'
import { TodosContext } from '../../context/TodosContext'

import styles from './TodoList.module.css'

export default function TodoList() {
    const { todos, toggleTodoCompleted, deleteTodo } = useContext(TodosContext)

    return (
        <ul className={styles.wrapper}>
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    {...todo}
                    onDeleteButtonPress={deleteTodo}
                    toggleDoneButtonPress={toggleTodoCompleted}
                />
            ))}
        </ul>
    )
}
