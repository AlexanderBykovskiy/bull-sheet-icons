import {typeUrlIconParams} from "./types";
import {
    getIconParamsFromSearchParams
} from "@shared/utils/get-icon-params-from-search-params";
import {errorIcon} from "@shared/utils/icon-creators";
import {typeIconParamsObj} from "@shared/utils/get-icon-params-from-search-params/types";
import {iconCollections, iconListObj, iconVariants} from "@shared/configs/icons.config";
import {isValidIconName} from "@shared/utils/is-valid-icon-name/is-valid-icon-name";

export const createIconByUrlParams = (urlParams: typeUrlIconParams, queryParams: URLSearchParams): string => {

    const iconParams: typeIconParamsObj = getIconParamsFromSearchParams(queryParams)

    const urlIconCollection: string = urlParams.iconCollection
    const urlIconVariant: string = urlParams.iconVariant
    const urlIconName: string = urlParams.iconName

    if (isValidIconName(urlIconCollection, urlIconVariant, urlIconName)) {
        return iconListObj[urlIconCollection as iconCollections][urlIconName](urlIconVariant as iconVariants, iconParams)
    }

    return errorIcon(iconParams)
}
