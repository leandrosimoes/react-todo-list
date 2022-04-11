import React, { ChangeEventHandler, useState } from 'react'
import uuid from 'react-uuid'

import { TodoItemType } from '../../@types'
import Button from '../../components/Button'
import Input from '../../components/Input'
import useTodos from '../../hooks/useTodos'

import styles from './TodoForm.module.css'

const TodoForm: React.FC = () => {
    const { todos, setTodos } = useTodos()
    const [newTodoText, setNewTodoText] = useState('')

    const handleAddButtonOnClick = () => {
        if (!newTodoText) {
            return
        }

        const newTodo: TodoItemType = {
            id: uuid(),
            text: newTodoText,
            isDone: false,
            createdAt: new Date(),
        }

        setTodos([newTodo, ...todos])
        setNewTodoText('')
    }

    const handleTodoTextInputOnChange: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setNewTodoText(event.target.value)
    }

    return (
        <div className={styles.todoForm}>
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
        </div>
    )
}

export default TodoForm
