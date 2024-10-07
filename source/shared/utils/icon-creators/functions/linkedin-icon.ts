import {
    typeIconCreateFunctionParams
} from "../../icon-creators/types";
import {iconVariants} from "@shared/configs/icons.config";
import {errorIcon} from "./error-icon";

export const linkedinIcon = (variant: iconVariants, params: typeIconCreateFunctionParams) => {
    const {iconSize, borderRadius, fillColor, iconColor} = params
    switch (variant) {
        case iconVariants.squareFill:
            return `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <rect width="100" height="100" fill="${fillColor}" rx="${borderRadius}" ry="${borderRadius}"/>
                    <path d="M15.8826 38.5182V83.1547H30.7191V38.5182H15.8826Z" fill="${iconColor}"/>
                    <path d="M23.2029 32.4259H23.3009C28.4769 32.4259 31.6952 28.9971 31.6952 24.7114C31.598 20.3316 28.4769 17 23.398 17C18.3202 17 15 20.3316 15 24.7114C15 28.9971 18.2259 32.4259 23.2029 32.4259Z" fill="${iconColor}"/>
                    <path d="M69.3903 83.1547H84.2308V57.558C84.2308 43.8486 76.9106 37.4706 67.1442 37.4706C59.2607 37.4706 55.7413 41.809 53.7692 44.8435V38.5185H38.9259C39.1248 42.7059 38.9259 83.1549 38.9259 83.1549H53.7692V58.2262C53.7692 56.8886 53.8712 55.5626 54.2615 54.6088C55.3354 51.9385 57.773 49.1818 61.8749 49.1818C67.2462 49.1818 69.3903 53.276 69.3903 59.2741V83.1547Z" fill="${iconColor}"/>
                </svg>`
        case iconVariants.circleFill:
            return `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <circle cx="50" cy="50" r="50" fill="${fillColor}"/>
                    <path d="M22.714 40.4059V76.5118H34.715V40.4059H22.714Z" fill="${iconColor}"/>
                    <path d="M28.6352 35.4779H28.7145C32.9013 35.4779 35.5045 32.7044 35.5045 29.2377C35.426 25.6949 32.9013 23 28.7931 23C24.6857 23 22 25.6949 22 29.2377C22 32.7044 24.6094 35.4779 28.6352 35.4779Z" fill="${iconColor}"/>
                    <path d="M65.9957 76.5118H78V55.8069C78 44.7175 72.0788 39.5584 64.1788 39.5584C57.802 39.5584 54.9552 43.0677 53.36 45.5223V40.406H41.3534C41.5143 43.7932 41.3534 76.512 41.3534 76.512H53.36V56.3474C53.36 55.2654 53.4425 54.1929 53.7582 53.4213C54.6268 51.2613 56.5986 49.0315 59.9166 49.0315C64.2613 49.0315 65.9957 52.3433 65.9957 57.195V76.5118Z" fill="${iconColor}"/>
                </svg>`
        default:
            return errorIcon(params)
    }
}
