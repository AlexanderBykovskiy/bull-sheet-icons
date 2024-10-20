'use client'

import React from 'react'
import classes from './styles.module.sass'
import {typeCollectionButtonProps} from '@features/collection-button-panel/types'
import {Button} from '@shared/ui/button'

export const CollectionButtonPanel: React.FC<typeCollectionButtonProps> = ({collectionPanelList, onChangeCurrentCollection}) => {
    return (
        <div className={classes['button-container']}>
            {collectionPanelList.map((item) => {
                return (
                    <Button key={item.collection} variant={item.isSelected ? 'fill' : 'outline'} onClick={() => onChangeCurrentCollection(item.collection)}>
                        {item.collection}
                    </Button>
                )
            })}
        </div>
    )
}
