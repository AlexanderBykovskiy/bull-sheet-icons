import {
    typeIconCreateFunctionParams
} from '../../icon-creators/types'
import {iconVariants} from '@shared/configs/icons.config'
import {errorIcon} from './error-icon'

export const twitterIcon = (variant: iconVariants, params: typeIconCreateFunctionParams): string => {
    const {iconSize, borderRadius, borderWeight, fillColor, iconColor, backgroundColor, textColor} = params

    console.log(borderWeight, borderWeight / 2)
    switch (variant) {
        case iconVariants.squareFill:
            return `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <rect width="100" height="100" fill="${fillColor}" rx="${borderRadius}" ry="${borderRadius}"/>
                    <path d="M77.1842 37.849C77.1842 37.2338 77.1703 36.6211 77.1433 36.0117C79.9189 34.0095 82.3268 31.5077 84.2305 28.6596C81.6833 29.7892 78.9462 30.553 76.0728 30.8965C79.0055 29.1382 81.2576 26.3554 82.3178 23.0385C79.5734 24.6659 76.5334 25.8486 73.2985 26.4848C70.7077 23.7246 67.0163 22 62.9308 22C55.0873 22 48.7273 28.3593 48.7273 36.2029C48.7273 37.3158 48.8534 38.4 49.0958 39.44C37.2914 38.847 26.8255 33.1927 19.8204 24.5991C18.5976 26.6974 17.8971 29.1369 17.8971 31.7402C17.8971 36.6675 20.404 41.0152 24.2154 43.5622C21.8868 43.4884 19.6969 42.8492 17.7822 41.7855C17.7809 41.8448 17.7809 41.9043 17.7809 41.9643C17.7809 48.8458 22.6771 54.5862 29.1745 55.8914C27.9826 56.2154 26.7277 56.3899 25.4323 56.3899C24.5171 56.3899 23.6273 56.3007 22.7596 56.1343C24.5673 61.7774 29.813 65.884 36.0284 65.998C31.167 69.8083 25.0429 72.0789 18.3884 72.0789C17.2415 72.0789 16.1112 72.0117 15 71.8796C21.2855 75.9103 28.7514 78.2613 36.7725 78.2613C62.898 78.2613 77.1842 56.6189 77.1842 37.849Z" fill="${iconColor}"/>
                </svg>`
        case iconVariants.circleFill:
            return `
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <circle cx="50" cy="50" r="50" fill="${fillColor}"/>
                    <path d="M77.1842 37.849C77.1842 37.2338 77.1703 36.6211 77.1433 36.0117C79.9189 34.0095 82.3268 31.5077 84.2305 28.6596C81.6833 29.7892 78.9462 30.553 76.0728 30.8965C79.0055 29.1382 81.2576 26.3554 82.3178 23.0385C79.5734 24.6659 76.5334 25.8486 73.2985 26.4848C70.7077 23.7246 67.0163 22 62.9308 22C55.0873 22 48.7273 28.3593 48.7273 36.2029C48.7273 37.3158 48.8534 38.4 49.0958 39.44C37.2914 38.847 26.8255 33.1927 19.8204 24.5991C18.5976 26.6974 17.8971 29.1369 17.8971 31.7402C17.8971 36.6675 20.404 41.0152 24.2154 43.5622C21.8868 43.4884 19.6969 42.8492 17.7822 41.7855C17.7809 41.8448 17.7809 41.9043 17.7809 41.9643C17.7809 48.8458 22.6771 54.5862 29.1745 55.8914C27.9826 56.2154 26.7277 56.3899 25.4323 56.3899C24.5171 56.3899 23.6273 56.3007 22.7596 56.1343C24.5673 61.7774 29.813 65.884 36.0284 65.998C31.167 69.8083 25.0429 72.0789 18.3884 72.0789C17.2415 72.0789 16.1112 72.0117 15 71.8796C21.2855 75.9103 28.7514 78.2613 36.7725 78.2613C62.898 78.2613 77.1842 56.6189 77.1842 37.849Z" fill="${iconColor}"/>
                </svg>`
        case iconVariants.rectangleFill:
            return `
                <svg viewBox="0 0 365 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${Math.ceil(iconSize * 365 / 100)}">
                    <mask id="mask" x="0" y="0" width="365" height="100">
                        <rect x="0" y="0" width="365" height="100" fill="black"/>
                        <rect x="0" y="0" width="365" height="100" rx="${borderRadius}" fill="white"/>
                    </mask>
                    <rect x="${borderWeight / 2}" y="${borderWeight / 2}" width="${365 - borderWeight}" height="${100 - borderWeight}" rx="${borderRadius}" stroke="${fillColor}" fill="${backgroundColor}" stroke-width="${borderWeight}"/>
                    <rect width="100" height="100" fill="${fillColor}" mask="url(#mask)"/>
                    <path d="M77.1842 37.849C77.1842 37.2338 77.1703 36.6211 77.1433 36.0117C79.9189 34.0095 82.3268 31.5077 84.2305 28.6596C81.6833 29.7892 78.9462 30.553 76.0728 30.8965C79.0055 29.1382 81.2576 26.3554 82.3178 23.0385C79.5734 24.6659 76.5334 25.8486 73.2985 26.4848C70.7077 23.7246 67.0163 22 62.9308 22C55.0873 22 48.7273 28.3593 48.7273 36.2029C48.7273 37.3158 48.8534 38.4 49.0958 39.44C37.2914 38.847 26.8255 33.1927 19.8204 24.5991C18.5976 26.6974 17.8971 29.1369 17.8971 31.7402C17.8971 36.6675 20.404 41.0152 24.2154 43.5622C21.8868 43.4884 19.6969 42.8492 17.7822 41.7855C17.7809 41.8448 17.7809 41.9043 17.7809 41.9643C17.7809 48.8458 22.6771 54.5862 29.1745 55.8914C27.9826 56.2154 26.7277 56.3899 25.4323 56.3899C24.5171 56.3899 23.6273 56.3007 22.7596 56.1343C24.5673 61.7774 29.813 65.884 36.0284 65.998C31.167 69.8083 25.0429 72.0789 18.3884 72.0789C17.2415 72.0789 16.1112 72.0117 15 71.8796C21.2855 75.9103 28.7514 78.2613 36.7725 78.2613C62.898 78.2613 77.1842 56.6189 77.1842 37.849Z" fill="${iconColor}"/>
                    <path d="M153.64 71.5C151.4 71.92 149.2 72.1 147.04 72.04C144.9 72 142.98 71.63 141.28 70.93C139.6 70.21 138.32 69.06 137.44 67.48C136.64 66 136.22 64.5 136.18 62.98C136.14 61.44 136.12 59.7 136.12 57.76V30.1H144.28V57.28C144.28 58.54 144.29 59.68 144.31 60.7C144.35 61.7 144.56 62.5 144.94 63.1C145.66 64.24 146.81 64.86 148.39 64.96C149.97 65.06 151.72 64.98 153.64 64.72V71.5ZM130.6 45.4V39.1H153.64V45.4H130.6ZM167.76 71.5L157.86 39.04L165.84 39.1L171.72 58.42L177.69 39.1H184.47L190.44 58.42L196.32 39.1H204.3L194.4 71.5H188.16L181.08 50.38L174 71.5H167.76ZM210.327 34.6V27.4H218.487V34.6H210.327ZM210.327 71.5V39.1H218.487V71.5H210.327ZM246.921 71.5C244.681 71.92 242.481 72.1 240.321 72.04C238.181 72 236.261 71.63 234.561 70.93C232.881 70.21 231.601 69.06 230.721 67.48C229.921 66 229.501 64.5 229.461 62.98C229.421 61.44 229.401 59.7 229.401 57.76V30.1H237.561V57.28C237.561 58.54 237.571 59.68 237.591 60.7C237.631 61.7 237.841 62.5 238.221 63.1C238.941 64.24 240.091 64.86 241.671 64.96C243.251 65.06 245.001 64.98 246.921 64.72V71.5ZM223.881 45.4V39.1H246.921V45.4H223.881ZM269.961 71.5C267.721 71.92 265.521 72.1 263.361 72.04C261.221 72 259.301 71.63 257.601 70.93C255.921 70.21 254.641 69.06 253.761 67.48C252.961 66 252.541 64.5 252.501 62.98C252.461 61.44 252.441 59.7 252.441 57.76V30.1H260.601V57.28C260.601 58.54 260.611 59.68 260.631 60.7C260.671 61.7 260.881 62.5 261.261 63.1C261.981 64.24 263.131 64.86 264.711 64.96C266.291 65.06 268.041 64.98 269.961 64.72V71.5ZM246.921 45.4V39.1H269.961V45.4H246.921ZM292.229 72.4C288.909 72.4 285.979 71.69 283.439 70.27C280.919 68.83 278.939 66.86 277.499 64.36C276.079 61.84 275.369 58.96 275.369 55.72C275.369 52.18 276.069 49.1 277.469 46.48C278.869 43.86 280.799 41.83 283.259 40.39C285.719 38.93 288.549 38.2 291.749 38.2C295.149 38.2 298.039 39 300.419 40.6C302.799 42.2 304.559 44.45 305.699 47.35C306.839 50.25 307.239 53.66 306.899 57.58H298.829V54.58C298.829 51.28 298.299 48.91 297.239 47.47C296.199 46.01 294.489 45.28 292.109 45.28C289.329 45.28 287.279 46.13 285.959 47.83C284.659 49.51 284.009 52 284.009 55.3C284.009 58.32 284.659 60.66 285.959 62.32C287.279 63.96 289.209 64.78 291.749 64.78C293.349 64.78 294.719 64.43 295.859 63.73C296.999 63.03 297.869 62.02 298.469 60.7L306.629 63.04C305.409 66 303.479 68.3 300.839 69.94C298.219 71.58 295.349 72.4 292.229 72.4ZM281.489 57.58V51.52H302.969V57.58H281.489ZM313.673 71.5V39.1H320.873V47.02L320.093 46C320.513 44.88 321.073 43.86 321.773 42.94C322.473 42.02 323.333 41.26 324.353 40.66C325.133 40.18 325.983 39.81 326.903 39.55C327.823 39.27 328.773 39.1 329.753 39.04C330.733 38.96 331.713 38.98 332.693 39.1V46.72C331.793 46.44 330.743 46.35 329.543 46.45C328.363 46.53 327.293 46.8 326.333 47.26C325.373 47.7 324.563 48.29 323.903 49.03C323.243 49.75 322.743 50.61 322.403 51.61C322.063 52.59 321.893 53.7 321.893 54.94V71.5H313.673Z" fill="${textColor}"/>
                </svg>`
        default:
            return errorIcon(params)
    }
}
