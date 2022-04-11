import React from 'react'

import { TodoItemType } from '../../@types'
import Button from '../Button'

import styles from './TodoListItem.module.css'

type TodoListItemTypeExtended = TodoItemType & {
    onDeleteButtonPress(id: string): void
    onDoneButtonPress(id: string): void
}

const TodoListItem: React.FC<TodoListItemTypeExtended> = ({
    id,
    text,
    isDone,
    onDeleteButtonPress,
    onDoneButtonPress,
}) => {
    const isDoneClass = isDone ? styles.done : ''

    return (
        <li className={`${styles.wrapper} ${isDoneClass}`}>
            <div className={styles.textArea}>{text}</div>
            <div className={styles.buttonsArea}>
                <Button
                    buttonType='danger'
                    onClick={() => onDeleteButtonPress(id)}>
                    Delete
                </Button>
                <Button
                    buttonType='success'
                    onClick={() => onDoneButtonPress(id)}
                    disabled={isDone}>
                    Done
                </Button>
            </div>
        </li>
    )
}

export default TodoListItem
