import React, {
    ChangeEventHandler,
    FormEventHandler,
    MouseEventHandler,
    useContext,
    useState,
} from 'react'
import { FaPlus } from 'react-icons/fa'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { TodosContext } from '../../context/TodosContext'

import styles from './TodoForm.module.css'

const TodoForm: React.FC = () => {
    const { addTodo, errorMessage } = useContext(TodosContext)
    const [newTodoText, setNewTodoText] = useState('')

    const handleAddButtonOnClick: MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        if (addTodo(newTodoText)) {
            setNewTodoText('')
        }
        event.preventDefault()
    }

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        if (addTodo(newTodoText)) {
            setNewTodoText('')
        }
        event.preventDefault()
    }

    const handleTodoTextInputOnChange: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setNewTodoText(event.target.value)
    }

    return (
        <>
            <form className={styles.todoForm} onSubmit={handleFormSubmit}>
                <Input
                    type='text'
                    onChange={handleTodoTextInputOnChange}
                    value={newTodoText}
                    placeholder='Make some coffe...'
                />
                <Button
                    buttonType='success'
                    onClick={handleAddButtonOnClick}
                    disabled={!newTodoText}>
                    <FaPlus className={styles.icon} /> Add
                </Button>
            </form>
            {errorMessage && (
                <div className={styles.errorMessage}>{errorMessage}</div>
            )}
        </>
    )
}

export default TodoForm
