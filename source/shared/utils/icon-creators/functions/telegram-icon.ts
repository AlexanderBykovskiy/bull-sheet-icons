import {typeIconFillRectangleCreateFunctionParams} from "../../icon-creators/types";
import {iconVariants} from "@shared/configs/icons.config";
import {errorIcon} from "./error-icon";

export const telegramIcon = (variant: iconVariants, params: typeIconFillRectangleCreateFunctionParams) => {
    const {iconSize, borderRadius, fillColor, iconColor} = params
    switch (variant) {
        case iconVariants.squareFill:
            return `
                <svg viewBox="0 0 340 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${Math.ceil(340 * iconSize / 100)}">
                    <rect width="100" height="100" fill="${fillColor}" rx="${borderRadius}" ry="${borderRadius}"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M82.1903 22.2658L70.4413 78.7792C70.1646 80.1135 68.6 80.7181 67.496 79.9159L51.4576 68.2717C50.484 67.5647 49.1563 67.6023 48.2242 68.3623L39.3319 75.6109C38.3 76.4548 36.7448 75.9845 36.3497 74.7135L30.1752 54.8561L14.2229 48.9025C12.6024 48.2955 12.5886 46.0078 14.2044 45.3854L79.673 20.1293C81.0609 19.5926 82.4928 20.8084 82.1903 22.2658ZM35.355 51.6869L66.5317 32.4854C67.0916 32.1414 67.6684 32.899 67.1866 33.3451L41.4571 57.2621C40.5525 58.1036 39.9695 59.2309 39.804 60.4537L38.9279 66.9489C38.8112 67.8159 37.5936 67.9016 37.3539 67.0625L33.9831 55.2183C33.5976 53.8673 34.16 52.4243 35.355 51.6869Z" fill="${iconColor}"/>
                </svg>`
        default:
            return errorIcon(params)
    }
}
