import React from 'react'
import {typeIconListProps} from './types'

export const IconList: React.FC<typeIconListProps> = ({collection}) => {
    return (
        <div>
            {collection}
        </div>
    )
}
