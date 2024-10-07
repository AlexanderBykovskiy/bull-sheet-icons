import {
    typeIconFillCircleCreateFunctionParams,
    typeIconFillRectangleCreateFunctionParams
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
    // rectangleFill = 'rectangle-fill',
    circleFill = 'circle-fill',
}

type typeIconVariantObject = {[key: string]: (params: typeIconFillRectangleCreateFunctionParams | typeIconFillCircleCreateFunctionParams) => string}
type typeIconCollectionObject = {[key in iconVariants]: typeIconVariantObject}
type typeIconListObjObject = {[key in iconCollections]: typeIconCollectionObject}

export const iconListObj: typeIconListObjObject = {
    [iconCollections.socialMedia]: {
        [iconVariants.squareFill]: {
            facebook: (params: typeIconFillRectangleCreateFunctionParams) => facebookIcon(iconVariants.squareFill, params),
            linkedin: (params: typeIconFillRectangleCreateFunctionParams) => linkedinIcon(iconVariants.squareFill, params),
            telegram: (params: typeIconFillRectangleCreateFunctionParams) => telegramIcon(iconVariants.squareFill, params),
        },
        [iconVariants.circleFill]: {
            facebook: (params: typeIconFillCircleCreateFunctionParams) => facebookIcon(iconVariants.circleFill, params),
            linkedin: (params: typeIconFillCircleCreateFunctionParams) => linkedinIcon(iconVariants.circleFill, params),
            telegram: (params: typeIconFillCircleCreateFunctionParams) => telegramIcon(iconVariants.circleFill, params),
        }
    }
}
