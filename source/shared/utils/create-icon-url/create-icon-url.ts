import {typeIconUrlParams} from './types'

export const createIconUrl = (iconConfig: typeIconUrlParams): string => {

    const iconParamsString = Object.keys(iconConfig)
        .filter(key => key !== 'collection' && key !== 'variant' && key !== 'name')
        .map(key => `${key}=${iconConfig[key as keyof typeIconUrlParams]}`)
        .join('&')

    return `/${iconConfig.collection}/${iconConfig.variant}/${iconConfig.name}?${iconParamsString}`
}
