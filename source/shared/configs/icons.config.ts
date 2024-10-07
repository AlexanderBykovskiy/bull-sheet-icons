import {
    typeIconCreateFunctionParams
} from "@shared/utils/icon-creators/types";
import {linkedinIcon} from "@shared/utils/icon-creators";
import {telegramIcon} from "@shared/utils/icon-creators/functions/telegram-icon";
import {facebookIcon} from "@shared/utils/icon-creators/functions/facebook-icon";

export enum iconCollections {
    socialMedia = 'social-media-icons',
    // technologies = 'technologies-icons',
}

export enum iconVariants {
    squareFill = 'square-fill',
    rectangleFill = 'rectangle-fill',
    circleFill = 'circle-fill',
}

type typeIconVariantObject = {[key: string]: (params: typeIconCreateFunctionParams) => string}
type typeIconCollectionObject = {[key in iconVariants]: typeIconVariantObject}
type typeIconListObjObject = {[key in iconCollections]: typeIconCollectionObject}

export const iconListObj: typeIconListObjObject = {
    [iconCollections.socialMedia]: {
        [iconVariants.squareFill]: {
            facebook: (params: typeIconCreateFunctionParams) => facebookIcon(iconVariants.squareFill, params),
            linkedin: (params: typeIconCreateFunctionParams) => linkedinIcon(iconVariants.squareFill, params),
            telegram: (params: typeIconCreateFunctionParams) => telegramIcon(iconVariants.squareFill, params),
        },
        [iconVariants.circleFill]: {
            facebook: (params: typeIconCreateFunctionParams) => facebookIcon(iconVariants.circleFill, params),
            linkedin: (params: typeIconCreateFunctionParams) => linkedinIcon(iconVariants.circleFill, params),
            telegram: (params: typeIconCreateFunctionParams) => telegramIcon(iconVariants.circleFill, params),
        },
        [iconVariants.rectangleFill]: {
            facebook: (params: typeIconCreateFunctionParams) => facebookIcon(iconVariants.rectangleFill, params),
            linkedin: (params: typeIconCreateFunctionParams) => linkedinIcon(iconVariants.rectangleFill, params),
            telegram: (params: typeIconCreateFunctionParams) => telegramIcon(iconVariants.rectangleFill, params),
        }
    }
}
