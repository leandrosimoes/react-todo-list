import React, {
    ChangeEventHandler,
    FormEventHandler,
    MouseEventHandler,
    useContext,
    useState,
} from 'react'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { TodosContext } from '../../context/TodosContext'

import styles from './TodoForm.module.css'

const TodoForm: React.FC = () => {
    const { addTodo } = useContext(TodosContext)
    const [newTodoText, setNewTodoText] = useState('')

    const handleAddButtonOnClick: MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        addTodo(newTodoText)
        setNewTodoText('')
        event.preventDefault()
    }

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        addTodo(newTodoText)
        setNewTodoText('')
        event.preventDefault()
    }

    const handleTodoTextInputOnChange: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setNewTodoText(event.target.value)
    }

    return (
        <form className={styles.todoForm} onSubmit={handleFormSubmit}>
            <Input
                type='text'
                onChange={handleTodoTextInputOnChange}
                value={newTodoText}
                placeholder='Make some coffe...'
            />
            <Button
                buttonType='danger'
                onClick={handleAddButtonOnClick}
                disabled={!newTodoText}>
                Add
            </Button>
        </form>
    )
}

export default TodoForm
