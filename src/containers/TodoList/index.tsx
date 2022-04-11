import TodoListItem from '../../components/TodoListItem'
import useTodos from '../../hooks/useTodos'

import styles from './TodoList.module.css'

export default function TodoList() {
    const { todos, setTodos } = useTodos()

    const onDeleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const onDoneTodo = (id: string) => {
        setTodos(
            todos.map((todo) => {
                return { ...todo, isDone: todo.isDone || todo.id === id }
            })
        )
    }

    return (
        <ul className={styles.wrapper}>
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    {...todo}
                    onDelete={onDeleteTodo}
                    onDone={onDoneTodo}
                />
            ))}
        </ul>
    )
}
