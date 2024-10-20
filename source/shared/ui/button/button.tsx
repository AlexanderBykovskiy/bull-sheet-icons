import React from 'react'
import cn from 'clsx'
import classes from './styles.module.sass'
import {typeButtonProps} from '@shared/ui/button/types'

export const Button: React.FC<typeButtonProps> = (props) => {

    const {
        children,
        variant = 'fill',
        ...anotherProps
    } = props

    return (
        <button
            className={cn(classes.button, classes[variant])}
            {...anotherProps}
        >
            {children}
        </button>
    )
}
