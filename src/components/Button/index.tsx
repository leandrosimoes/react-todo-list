import { ButtonHTMLAttributes } from 'react'

import styles from './Button.module.css'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonType: 'danger' | 'success' | 'default'
}

const Button: React.FC<ButtonType> = ({
    buttonType = 'danger',
    children,
    ...props
}) => {
    const className = styles[buttonType] || ''

    return (
        <button type='button' className={className} {...props}>
            {children}
        </button>
    )
}

export default Button
