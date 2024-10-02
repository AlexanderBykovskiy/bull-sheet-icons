import {
    defaultBorderRadiusSize,
    defaultFillColor, defaultIconColor,
    defaultIconSize, lgBorderRadiusSize,
    maxIconSize, mdBorderRadiusSize,
    minIconSize, smBorderRadiusSize
} from "@shared/configs/default-icons.config";
import {typeIconParamsObj} from "./types";
import {isValidColor} from "@shared/utils/is-valid-color/is-valid-color";

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
    }

    const rawFillColor = paramsObj.get('fill_color') || ''
    const fillColor = isValidColor(rawFillColor) ? '#' + rawFillColor : defaultFillColor

    const rawIconColor = paramsObj.get('icon_color') || ''
    const iconColor = isValidColor(rawIconColor) ? '#' + rawIconColor : defaultIconColor

    return  {
        iconSize,
        borderRadius,
        fillColor,
        iconColor,
    }
}
