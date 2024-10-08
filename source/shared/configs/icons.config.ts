import {
    typeIconCreateFunctionParams
} from "@shared/utils/icon-creators/types";
import {linkedinIcon, telegramIcon, facebookIcon, instagramIcon} from "@shared/utils/icon-creators";

export enum iconCollections {
    socialMedia = 'social-media-icons',
    // technologies = 'technologies-icons',
}

export enum iconVariants {
    squareFill = 'square-fill',
    rectangleFill = 'rectangle-fill',
    circleFill = 'circle-fill',
}

type typeIconVariantObject = {[key: string]: (variant: iconVariants, params: typeIconCreateFunctionParams) => string}
type typeIconListObjObject = {[key in iconCollections]: typeIconVariantObject}

export const iconListObj: typeIconListObjObject = {
    [iconCollections.socialMedia]: {
        facebook: (variant: iconVariants, params: typeIconCreateFunctionParams) => facebookIcon(variant, params),
        instagram: (variant: iconVariants, params: typeIconCreateFunctionParams) => instagramIcon(variant, params),
        linkedin: (variant: iconVariants, params: typeIconCreateFunctionParams) => linkedinIcon(variant, params),
        telegram: (variant: iconVariants, params: typeIconCreateFunctionParams) => telegramIcon(variant, params),
    }
}
