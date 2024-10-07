import {
    defaultBorderRadiusSize, defaultBorderWeight, defaultFillColor, defaultIconColor,
    defaultIconSize, lgBorderRadiusSize, lgBorderWeight,
    maxIconSize, mdBorderRadiusSize, mdBorderWeight,
    minIconSize, smBorderRadiusSize, smBorderWeight, xlBorderRadiusSize, xxLBorderRadiusSize
} from "@shared/configs/default-icons.config";
import {typeIconParamsObj} from "./types";
import {createValidColor} from "@shared/utils/create-valid-color/create-valid-color";

export const getIconParamsFromSearchParams = (paramsObj: URLSearchParams): typeIconParamsObj => {

    const rawIconSize = parseInt(paramsObj.get('size') || '0')
    const iconSize = rawIconSize < minIconSize || rawIconSize > maxIconSize ? defaultIconSize : rawIconSize

    const rawBorderRadius = paramsObj.get('border_radius') || ''
    let borderRadius: number = defaultBorderRadiusSize
    switch (rawBorderRadius) {
        case 'sm':
            borderRadius = smBorderRadiusSize
            break
        case 'md':
            borderRadius = mdBorderRadiusSize
            break
        case 'lg':
            borderRadius = lgBorderRadiusSize
            break
        case 'xl':
            borderRadius = xlBorderRadiusSize
            break
        case 'xxl':
            borderRadius = xxLBorderRadiusSize
            break
    }

    const rawBorderWeight = paramsObj.get('border_weight') || ''
    let borderWeight: number = defaultBorderWeight
    switch (rawBorderWeight) {
        case 'sm':
            borderWeight = smBorderWeight
            break
        case 'md':
            borderWeight = mdBorderWeight
            break
        case 'lg':
            borderWeight = lgBorderWeight
            break
    }

    const rawFillColor = paramsObj.get('fill_color') || defaultFillColor
    const fillColor = createValidColor(rawFillColor)

    const rawIconColor = paramsObj.get('icon_color') || defaultIconColor
    const iconColor = createValidColor(rawIconColor)

    return  {
        iconSize,
        borderRadius,
        fillColor,
        iconColor,
        borderWeight,
    }
}
