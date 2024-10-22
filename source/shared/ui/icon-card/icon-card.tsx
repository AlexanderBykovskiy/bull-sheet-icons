import React from 'react'
import classes from './styles.module.sass'
import {PreviewIcons} from '@shared/ui/preview-icons'
import {typeIconCardProps} from '@shared/ui/icon-card/types'
import cn from 'clsx'

export const IconCard: React.FC<typeIconCardProps> = (props) => {

    const {iconName, iconCollection, className: outsideClasses, ...otherProps} = props

    return (
        <button className={cn(outsideClasses, classes['icon-button'])} {...otherProps}>
            <div className={classes['image-container']}>
                <PreviewIcons iconCollection={iconCollection} iconName={iconName}/>
            </div>
            <div className={classes['icon-name']}>
                <span>{iconName}</span>
            </div>
        </button>
    )
}
