import {typeIconFillRectangleCreateFunctionParams} from "../../icon-creators/types";
import {iconVariants} from "@shared/configs/icons.config";
import {errorIcon} from "./error-icon";

export const linkedinIcon = (variant: iconVariants, params: typeIconFillRectangleCreateFunctionParams) => {
    const {iconSize, borderRadius, fillColor, iconColor} = params
    switch (variant) {
        case iconVariants.squareFill:
            return `
                <svg viewBox="0 0 340 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${Math.ceil(340 * iconSize / 100)}">
                    <rect width="100" height="100" fill="${fillColor}" rx="${borderRadius}" ry="${borderRadius}"/>
                    <path d="M15.8826 38.5182V83.1547H30.7191V38.5182H15.8826Z" fill="${iconColor}"/>
                    <path d="M23.2029 32.4259H23.3009C28.4769 32.4259 31.6952 28.9971 31.6952 24.7114C31.598 20.3316 28.4769 17 23.398 17C18.3202 17 15 20.3316 15 24.7114C15 28.9971 18.2259 32.4259 23.2029 32.4259Z" fill="${iconColor}"/>
                    <path d="M69.3903 83.1547H84.2308V57.558C84.2308 43.8486 76.9106 37.4706 67.1442 37.4706C59.2607 37.4706 55.7413 41.809 53.7692 44.8435V38.5185H38.9259C39.1248 42.7059 38.9259 83.1549 38.9259 83.1549H53.7692V58.2262C53.7692 56.8886 53.8712 55.5626 54.2615 54.6088C55.3354 51.9385 57.773 49.1818 61.8749 49.1818C67.2462 49.1818 69.3903 53.276 69.3903 59.2741V83.1547Z" fill="${iconColor}"/>
                </svg>`
        default:
            return errorIcon(params)
    }
}
