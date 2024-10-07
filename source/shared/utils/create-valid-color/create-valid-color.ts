import {isValidColor} from "@shared/utils/is-valid-color/is-valid-color";
import {defaultFillColor} from "@shared/configs/default-icons.config";

export const createValidColor = (color: string): string => {
    let validColor: string = defaultFillColor
    if (isValidColor(color)) {
        if (color === "currentColor") validColor = "currentColor"
        else validColor = '#' + color
    }
    return validColor
}
