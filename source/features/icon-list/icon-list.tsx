import React from 'react'
import classes from './styles.module.sass'
import {typeIconListProps} from './types'
import {iconListObj} from '@shared/configs/icons.config'
import {IconCard} from '@shared/ui/icon-card'

export const IconList: React.FC<typeIconListProps> = ({collection}) => {
    if (collection in iconListObj) {

        const iconList = Object.keys(iconListObj[collection]).map(key => ({
            name: key,
            iconCollection: collection,
        }))

        console.log(iconList)

        return (
            <div className={classes['il-container']}>
                {iconList.map(iconData => <IconCard
                    key={iconData.name}
                    iconName={iconData.name}
                    iconCollection={iconData.iconCollection}
                    className={classes['i-container']}
                    onClick={() => console.log(iconData.name)}
                />)}
            </div>
        )

    } else return null
}
