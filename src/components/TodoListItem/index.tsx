import React from 'react'
import { FaTrash, FaCheck, FaTimes } from 'react-icons/fa'

import { TodoItemType } from '../../@types'
import Button from '../Button'

import styles from './TodoListItem.module.css'

type TodoListItemTypeExtended = TodoItemType & {
    onDeleteButtonPress(id: string): void
    toggleDoneButtonPress(id: string): void
}

const TodoListItem: React.FC<TodoListItemTypeExtended> = ({
    id,
    text,
    isDone,
    onDeleteButtonPress,
    toggleDoneButtonPress,
}) => {
    const isDoneClass = isDone ? styles.done : ''

    return (
        <li className={`${styles.wrapper} ${isDoneClass}`}>
            <div className={styles.textArea}>{text}</div>
            <div className={styles.buttonsArea}>
                {!isDone && (
                    <Button
                        buttonType='success'
                        onClick={() => toggleDoneButtonPress(id)}>
                        <FaCheck className={styles.icon} /> Done
                    </Button>
                )}
                {isDone && (
                    <Button
                        buttonType='success'
                        onClick={() => toggleDoneButtonPress(id)}>
                        <FaTimes className={styles.icon} /> Undone
                    </Button>
                )}
                <Button
                    buttonType='danger'
                    onClick={() => onDeleteButtonPress(id)}>
                    <FaTrash className={styles.icon} /> Delete
                </Button>
            </div>
        </li>
    )
}

export default TodoListItem
