import {isValidIconCollection} from "@shared/utils/is-valid-icon-collection/is-valid-icon-collection";
import {isValidIconVariant} from "@shared/utils/is-valid-icon-variant/is-valid-icon-variant";
import {iconListObj} from "@shared/configs/icons.config";

export const isValidIconName = (iconCollection: string, iconVariant: string, iconName: string): boolean => {
    if (isValidIconCollection(iconCollection) && isValidIconVariant(iconVariant)) {
        return (Object.keys(iconListObj[iconCollection as keyof typeof iconListObj]
            [iconVariant as keyof (typeof iconListObj)[keyof typeof iconListObj]]) as string[])
            .includes(iconName)
    }
    return false
}
