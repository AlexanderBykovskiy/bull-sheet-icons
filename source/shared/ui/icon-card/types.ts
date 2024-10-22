import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import {iconCollections} from '@shared/configs/icons.config'

export type typeIconCardProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    iconName: string
    iconCollection: iconCollections
}
