import React from 'react'
import {typePreviewIconsProps} from '@shared/ui/preview-icons/types'
import {ErrorIcon} from '@shared/ui/preview-icons/icons/error-icon'
import {iconCollections} from '@shared/configs/icons.config'
import {TJsIcon} from '@shared/ui/preview-icons/icons/t-js-icon'

export const PreviewIcons: React.FC<typePreviewIconsProps> = ({iconCollection, iconName}) => {

    switch (`${iconCollection}-${iconName}`) {
        case `${iconCollections.technologies}-js`:
            return <TJsIcon/>
        default:
            return <ErrorIcon/>
    }
}
