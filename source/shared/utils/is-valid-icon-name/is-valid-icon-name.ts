import {isValidIconCollection} from "@shared/utils/is-valid-icon-collection/is-valid-icon-collection";
import {iconCollections, iconListObj} from "@shared/configs/icons.config";

export const isValidIconName = (iconCollection: string, iconVariant: string, iconName: string): boolean => {
    if (isValidIconCollection(iconCollection)) return  iconName in iconListObj[iconCollection as iconCollections]
    return false
}
