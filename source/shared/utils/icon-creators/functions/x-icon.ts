import {
    typeIconCreateFunctionParams
} from '../../icon-creators/types'
import {iconVariants} from '@shared/configs/icons.config'
import {errorIcon} from './error-icon'

export const xIcon = (variant: iconVariants, params: typeIconCreateFunctionParams): string => {

    const {iconSize, borderRadius, borderWeight, fillColor, iconColor, backgroundColor, textColor} = params

    switch (variant) {
        case iconVariants.squareFill:
            return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <rect width="100" height="100" fill="${fillColor}" rx="${borderRadius}" ry="${borderRadius}"/>
                    <path d="M75.0301 73.867L55.5339 45.3299L77.1428 20H72.2028L67.9617 24.9439L53.3124 42.1069L39.3622 21.6897L38.2126 20H21.0621L25.241 26.1173L43.7896 53.2621L21 80H25.9401L46.0111 56.485L60.9245 78.2947L62.0741 79.9844H79.2245L75.0301 73.867ZM64.1091 76.0887L48.6209 53.4342L46.415 50.1956L28.4412 23.9113H36.1775L50.7026 45.1734L52.9085 48.3963L71.8299 76.0887H64.1091Z" fill="${iconColor}"/>
                </svg>`
        case iconVariants.circleFill:
            return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <circle cx="50" cy="50" r="50" fill="${fillColor}"/>
                    <path d="M73.182 71.3781L55.4352 45.219L75.1051 22H70.6083L66.7479 26.5319L53.413 42.2647L40.7145 23.5489L39.6681 22H24.0566L27.8605 27.6076L44.7447 52.4902L24 77H28.4968L46.7668 55.4446L60.3421 75.4368L61.3885 76.9857H77L73.182 71.3781ZM63.2409 73.4146L49.1425 52.648L47.1345 49.6793L30.7735 25.5854H37.8156L51.0374 45.0756L53.0454 48.03L70.2689 73.4146H63.2409Z" fill="${iconColor}"/>
                </svg>`
        case iconVariants.rectangleFill:
            return `<svg viewBox="0 0 201 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${Math.ceil(iconSize * 201 / 100)}">
                    <mask id="mask" x="0" y="0" width="201" height="100">
                        <rect x="0" y="0" width="201" height="100" fill="black"/>
                        <rect x="0" y="0" width="201" height="100" rx="${borderRadius}" fill="white"/>
                    </mask>
                    <rect x="${borderWeight / 2}" y="${borderWeight / 2}" width="${201 - borderWeight}" height="${100 - borderWeight}" rx="${borderRadius}" stroke="${fillColor}" fill="${backgroundColor}" stroke-width="${borderWeight}"/>
                    <rect width="100" height="100" fill="${fillColor}" mask="url(#mask)"/>
                    <path d="M75.0301 73.867L55.5339 45.3299L77.1428 20H72.2028L67.9617 24.9439L53.3124 42.1069L39.3622 21.6897L38.2126 20H21.0621L25.241 26.1173L43.7896 53.2621L21 80H25.9401L46.0111 56.485L60.9245 78.2947L62.0741 79.9844H79.2245L75.0301 73.867ZM64.1091 76.0887L48.6209 53.4342L46.415 50.1956L28.4412 23.9113H36.1775L50.7026 45.1734L52.9085 48.3963L71.8299 76.0887H64.1091Z" fill="${iconColor}"/>
                    <path d="M130.6 71.5L145.12 49.66L131.02 28.3H141.04L150.22 42.7L159.28 28.3H169.36L155.26 49.66L169.72 71.5H159.7L150.22 56.62L140.68 71.5H130.6Z" fill="${textColor}"/>
                </svg>`
        default:
            return errorIcon(params)
    }
}
