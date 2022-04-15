import React from "react"

export type TodoItemType = {
    id: string
    text: string
    isDone: boolean
    createdAt: Date
}

export type FCWithChildrenType = {
    children: React.ReactNode
}