import React from 'react'

import { TodoItemType } from '../../@types'
import Button from '../Button'

import styles from './TodoListItem.module.css'

type TodoListItemTypeExtended = TodoItemType & {
    onDelete(id: string): void
    onDone(id: string): void
}

const TodoListItem: React.FC<TodoListItemTypeExtended> = ({
    id,
    text,
    isDone,
    onDelete,
    onDone,
}) => {
    const isDoneClass = isDone ? styles.done : ''

    return (
        <li className={`${styles.wrapper} ${isDoneClass}`}>
            <div className={`${styles.textArea} ${isDoneClass}`}>{text}</div>
            <div className={styles.buttonsArea}>
                <Button buttonType='danger' onClick={() => onDelete(id)}>
                    Delete
                </Button>
                <Button
                    buttonType='success'
                    onClick={() => onDone(id)}
                    disabled={isDone}>
                    Done
                </Button>
            </div>
        </li>
    )
}

export default TodoListItem
