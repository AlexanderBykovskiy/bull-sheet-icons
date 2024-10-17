import React from 'react'
import cn from 'clsx'
import classes from './styles.module.sass'
import {typeContentBlockProps} from '@shared/ui/content-block/types'

export const ContentBlock: React.FC<typeContentBlockProps> = ({children, label, padding}) => {
    return (
        <div className={classes['cb-container']}>
            {label && <div className={classes.label}>{label}</div>}
            <div className={cn({[classes[padding as keyof typeof classes]]: !!padding})}>{children}</div>
        </div>
    )
}