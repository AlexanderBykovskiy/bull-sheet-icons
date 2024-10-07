import {
    typeIconCreateFunctionParams
} from "../../icon-creators/types";
import {iconVariants} from "@shared/configs/icons.config";
import {errorIcon} from "./error-icon";

export const telegramIcon = (variant: iconVariants, params: typeIconCreateFunctionParams) => {
    const {iconSize, borderRadius, fillColor, iconColor} = params
    switch (variant) {
        case iconVariants.squareFill:
            return `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <rect width="100" height="100" fill="${fillColor}" rx="${borderRadius}" ry="${borderRadius}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M82.1903 22.2658L70.4413 78.7792C70.1646 80.1135 68.6 80.7181 67.496 79.9159L51.4576 68.2717C50.484 67.5647 49.1563 67.6023 48.2242 68.3623L39.3319 75.6109C38.3 76.4548 36.7448 75.9845 36.3497 74.7135L30.1752 54.8561L14.2229 48.9025C12.6024 48.2955 12.5886 46.0078 14.2044 45.3854L79.673 20.1293C81.0609 19.5926 82.4928 20.8084 82.1903 22.2658ZM35.355 51.6869L66.5317 32.4854C67.0916 32.1414 67.6684 32.899 67.1866 33.3451L41.4571 57.2621C40.5525 58.1036 39.9695 59.2309 39.804 60.4537L38.9279 66.9489C38.8112 67.8159 37.5936 67.9016 37.3539 67.0625L33.9831 55.2183C33.5976 53.8673 34.16 52.4243 35.355 51.6869Z" fill="${iconColor}"/>
                </svg>`
        case iconVariants.circleFill:
            return `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <circle cx="50" cy="50" r="50" fill="${fillColor}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M76.1945 25.9712L65.973 75.137C65.7323 76.2978 64.3711 76.8238 63.4107 76.1259L49.4575 65.9956C48.6104 65.3805 47.4554 65.4132 46.6445 66.0744L38.9083 72.3806C38.0106 73.1148 36.6576 72.7056 36.3138 71.5999L30.9421 54.3243L17.0639 49.1447C15.6541 48.6166 15.6421 46.6264 17.0478 46.0849L74.0044 24.1125C75.2119 23.6456 76.4576 24.7033 76.1945 25.9712ZM35.4485 51.5671L62.5717 34.8621C63.0589 34.5628 63.5606 35.2219 63.1415 35.6101L40.7573 56.4174C39.9703 57.1495 39.463 58.1302 39.319 59.1941L38.5569 64.8448C38.4553 65.5991 37.3961 65.6737 37.1875 64.9436L34.255 54.6394C33.9196 53.464 34.4089 52.2086 35.4485 51.5671Z" fill="${iconColor}"/>
                </svg>`
        default:
            return errorIcon(params)
    }
}
