import {typeIconFillRectangleCreateFunctionParams, typeIconFillCircleCreateFunctionParams} from "../../icon-creators/types";
import {iconVariants} from "@shared/configs/icons.config";
import {errorIcon} from "./error-icon";

export const facebookIcon = (variant: iconVariants, params: typeIconFillRectangleCreateFunctionParams | typeIconFillCircleCreateFunctionParams): string => {
    const {iconSize, borderRadius, fillColor, iconColor} = params
    switch (variant) {
        case iconVariants.squareFill:
            return `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <rect width="100" height="100" fill="${fillColor}" rx="${borderRadius}" ry="${borderRadius}"/>
                    <path d="M58.4932 27.1354H66.3094L66.3097 15H55.6798C40.9336 15 40.9746 26.1997 40.9823 28.2911C40.9825 28.3342 40.9826 28.3734 40.9826 28.4086V37.9374H34V49.5921H40.9826V84.2305H55.3268V49.5958H64.9528C64.9528 49.5958 65.8547 44.0073 66.2941 37.8958H55.3826V29.9257C55.3826 28.7354 56.9451 27.1354 58.4932 27.1354Z" fill="${iconColor}"/>
                </svg>`
        case iconVariants.circleFill:
            return `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <circle cx="50" cy="50" r="50" fill="${fillColor}"/>
                    <path d="M55.4932 27.1354H63.3094L63.3097 15H52.6798C37.9336 15 37.9746 26.1997 37.9823 28.2911C37.9825 28.3342 37.9826 28.3734 37.9826 28.4086V37.9374H31V49.5921H37.9826V84.2305H52.3268V49.5958H61.9528C61.9528 49.5958 62.8547 44.0073 63.2941 37.8958H52.3826V29.9257C52.3826 28.7354 53.9451 27.1354 55.4932 27.1354Z" fill="${iconColor}"/>
                </svg>`
        default:
            return errorIcon(params as typeIconFillRectangleCreateFunctionParams)
    }
}
