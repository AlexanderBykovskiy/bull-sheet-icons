import {
    typeIconCreateFunctionParams
} from "../../icon-creators/types";
import {iconVariants} from "@shared/configs/icons.config";
import {errorIcon} from "./error-icon";

export const telegramIcon = (variant: iconVariants, params: typeIconCreateFunctionParams) => {
    const {iconSize, borderRadius, borderWeight, fillColor, iconColor, backgroundColor, textColor} = params
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
        case iconVariants.rectangleFill:
            return `
                <svg viewBox="0 0 435 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${Math.ceil(iconSize * 435 / 100)}">
                    <mask id="mask" x="0" y="0" width="435" height="100">
                        <rect x="0" y="0" width="435" height="100" fill="black"/>
                        <rect x="0" y="0" width="435" height="100" rx="${borderRadius}" fill="white"/>
                    </mask>
                    <rect x="${borderWeight / 2}" y="${borderWeight / 2}" width="${435 - borderWeight}" height="${100 - borderWeight}" rx="${borderRadius}" stroke="${fillColor}" fill="${backgroundColor}" stroke-width="${borderWeight}"/>
                    <rect width="100" height="100" fill="${fillColor}" mask="url(#mask)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M82.1903 22.2658L70.4413 78.7792C70.1646 80.1135 68.6 80.7181 67.496 79.9159L51.4576 68.2717C50.484 67.5647 49.1563 67.6023 48.2242 68.3623L39.3319 75.6109C38.3 76.4548 36.7448 75.9845 36.3497 74.7135L30.1752 54.8561L14.2229 48.9025C12.6024 48.2955 12.5886 46.0078 14.2044 45.3854L79.673 20.1293C81.0609 19.5926 82.4928 20.8084 82.1903 22.2658ZM35.355 51.6869L66.5317 32.4854C67.0916 32.1414 67.6684 32.899 67.1866 33.3451L41.4571 57.2621C40.5525 58.1036 39.9695 59.2309 39.804 60.4537L38.9279 66.9489C38.8112 67.8159 37.5936 67.9016 37.3539 67.0625L33.9831 55.2183C33.5976 53.8673 34.16 52.4243 35.355 51.6869Z" fill="${iconColor}"/>
                    <path d="M144.22 71.5V35.92H130.6V28.3H166V35.92H152.38V71.5H144.22ZM181.076 72.4C177.756 72.4 174.826 71.69 172.286 70.27C169.766 68.83 167.786 66.86 166.346 64.36C164.926 61.84 164.216 58.96 164.216 55.72C164.216 52.18 164.916 49.1 166.316 46.48C167.716 43.86 169.646 41.83 172.106 40.39C174.566 38.93 177.396 38.2 180.596 38.2C183.996 38.2 186.886 39 189.266 40.6C191.646 42.2 193.406 44.45 194.546 47.35C195.686 50.25 196.086 53.66 195.746 57.58H187.676V54.58C187.676 51.28 187.146 48.91 186.086 47.47C185.046 46.01 183.336 45.28 180.956 45.28C178.176 45.28 176.126 46.13 174.806 47.83C173.506 49.51 172.856 52 172.856 55.3C172.856 58.32 173.506 60.66 174.806 62.32C176.126 63.96 178.056 64.78 180.596 64.78C182.196 64.78 183.566 64.43 184.706 63.73C185.846 63.03 186.716 62.02 187.316 60.7L195.476 63.04C194.256 66 192.326 68.3 189.686 69.94C187.066 71.58 184.196 72.4 181.076 72.4ZM170.336 57.58V51.52H191.816V57.58H170.336ZM203.12 71.5V27.4H211.28V71.5H203.12ZM235.334 72.4C232.014 72.4 229.084 71.69 226.544 70.27C224.024 68.83 222.044 66.86 220.604 64.36C219.184 61.84 218.474 58.96 218.474 55.72C218.474 52.18 219.174 49.1 220.574 46.48C221.974 43.86 223.904 41.83 226.364 40.39C228.824 38.93 231.654 38.2 234.854 38.2C238.254 38.2 241.144 39 243.524 40.6C245.904 42.2 247.664 44.45 248.804 47.35C249.944 50.25 250.344 53.66 250.004 57.58H241.934V54.58C241.934 51.28 241.404 48.91 240.344 47.47C239.304 46.01 237.594 45.28 235.214 45.28C232.434 45.28 230.384 46.13 229.064 47.83C227.764 49.51 227.114 52 227.114 55.3C227.114 58.32 227.764 60.66 229.064 62.32C230.384 63.96 232.314 64.78 234.854 64.78C236.454 64.78 237.824 64.43 238.964 63.73C240.104 63.03 240.974 62.02 241.574 60.7L249.734 63.04C248.514 66 246.584 68.3 243.944 69.94C241.324 71.58 238.454 72.4 235.334 72.4ZM224.594 57.58V51.52H246.074V57.58H224.594ZM270.638 86.8C268.798 86.8 267.048 86.5 265.388 85.9C263.728 85.32 262.238 84.5 260.918 83.44C259.618 82.4 258.558 81.18 257.738 79.78L265.298 76.12C265.818 77.08 266.558 77.81 267.518 78.31C268.498 78.81 269.558 79.06 270.698 79.06C271.918 79.06 273.068 78.85 274.148 78.43C275.228 78.03 276.088 77.42 276.728 76.6C277.388 75.8 277.698 74.8 277.658 73.6V64.18H278.678V39.1H285.818V73.72C285.818 74.52 285.778 75.27 285.698 75.97C285.638 76.69 285.518 77.4 285.338 78.1C284.818 80.08 283.848 81.71 282.428 82.99C281.028 84.27 279.308 85.22 277.268 85.84C275.228 86.48 273.018 86.8 270.638 86.8ZM269.918 72.4C266.938 72.4 264.328 71.65 262.088 70.15C259.848 68.65 258.098 66.61 256.838 64.03C255.598 61.45 254.978 58.54 254.978 55.3C254.978 52 255.608 49.07 256.868 46.51C258.148 43.93 259.938 41.9 262.238 40.42C264.538 38.94 267.238 38.2 270.338 38.2C273.418 38.2 276.008 38.95 278.108 40.45C280.208 41.95 281.798 43.99 282.878 46.57C283.958 49.15 284.498 52.06 284.498 55.3C284.498 58.54 283.948 61.45 282.848 64.03C281.768 66.61 280.148 68.65 277.988 70.15C275.828 71.65 273.138 72.4 269.918 72.4ZM271.238 65.14C273.058 65.14 274.508 64.73 275.588 63.91C276.688 63.09 277.478 61.94 277.958 60.46C278.438 58.98 278.678 57.26 278.678 55.3C278.678 53.34 278.438 51.62 277.958 50.14C277.478 48.66 276.708 47.51 275.648 46.69C274.608 45.87 273.238 45.46 271.538 45.46C269.718 45.46 268.218 45.91 267.038 46.81C265.878 47.69 265.018 48.88 264.458 50.38C263.898 51.86 263.618 53.5 263.618 55.3C263.618 57.12 263.888 58.78 264.428 60.28C264.968 61.76 265.798 62.94 266.918 63.82C268.038 64.7 269.478 65.14 271.238 65.14ZM294.22 71.5V39.1H301.42V47.02L300.64 46C301.06 44.88 301.62 43.86 302.32 42.94C303.02 42.02 303.88 41.26 304.9 40.66C305.68 40.18 306.53 39.81 307.45 39.55C308.37 39.27 309.32 39.1 310.3 39.04C311.28 38.96 312.26 38.98 313.24 39.1V46.72C312.34 46.44 311.29 46.35 310.09 46.45C308.91 46.53 307.84 46.8 306.88 47.26C305.92 47.7 305.11 48.29 304.45 49.03C303.79 49.75 303.29 50.61 302.95 51.61C302.61 52.59 302.44 53.7 302.44 54.94V71.5H294.22ZM327.302 72.4C324.982 72.4 323.012 71.96 321.392 71.08C319.792 70.18 318.572 68.99 317.732 67.51C316.912 66.01 316.502 64.36 316.502 62.56C316.502 61.06 316.732 59.69 317.192 58.45C317.652 57.21 318.392 56.12 319.412 55.18C320.452 54.22 321.842 53.42 323.582 52.78C324.782 52.34 326.212 51.95 327.872 51.61C329.532 51.27 331.412 50.95 333.512 50.65C335.612 50.33 337.922 49.98 340.442 49.6L337.502 51.22C337.502 49.3 337.042 47.89 336.122 46.99C335.202 46.09 333.662 45.64 331.502 45.64C330.302 45.64 329.052 45.93 327.752 46.51C326.452 47.09 325.542 48.12 325.022 49.6L317.642 47.26C318.462 44.58 320.002 42.4 322.262 40.72C324.522 39.04 327.602 38.2 331.502 38.2C334.362 38.2 336.902 38.64 339.122 39.52C341.342 40.4 343.022 41.92 344.162 44.08C344.802 45.28 345.182 46.48 345.302 47.68C345.422 48.88 345.482 50.22 345.482 51.7V71.5H338.342V64.84L339.362 66.22C337.782 68.4 336.072 69.98 334.232 70.96C332.412 71.92 330.102 72.4 327.302 72.4ZM329.042 65.98C330.542 65.98 331.802 65.72 332.822 65.2C333.862 64.66 334.682 64.05 335.282 63.37C335.902 62.69 336.322 62.12 336.542 61.66C336.962 60.78 337.202 59.76 337.262 58.6C337.342 57.42 337.382 56.44 337.382 55.66L339.782 56.26C337.362 56.66 335.402 57 333.902 57.28C332.402 57.54 331.192 57.78 330.272 58C329.352 58.22 328.542 58.46 327.842 58.72C327.042 59.04 326.392 59.39 325.892 59.77C325.412 60.13 325.052 60.53 324.812 60.97C324.592 61.41 324.482 61.9 324.482 62.44C324.482 63.18 324.662 63.82 325.022 64.36C325.402 64.88 325.932 65.28 326.612 65.56C327.292 65.84 328.102 65.98 329.042 65.98ZM392.282 71.5V52.36C392.282 50.22 391.772 48.56 390.752 47.38C389.752 46.18 388.362 45.58 386.582 45.58C385.442 45.58 384.452 45.85 383.612 46.39C382.772 46.91 382.112 47.65 381.632 48.61C381.172 49.55 380.942 50.64 380.942 51.88L377.522 49.6C377.522 47.38 378.042 45.42 379.082 43.72C380.142 42.02 381.552 40.7 383.312 39.76C385.092 38.8 387.062 38.32 389.222 38.32C392.922 38.32 395.712 39.42 397.592 41.62C399.492 43.8 400.442 46.66 400.442 50.2V71.5H392.282ZM353.222 71.5V39.1H360.422V49.84H361.442V71.5H353.222ZM372.782 71.5V52.36C372.782 50.22 372.272 48.56 371.252 47.38C370.252 46.18 368.862 45.58 367.082 45.58C365.382 45.58 364.012 46.17 362.972 47.35C361.952 48.51 361.442 50.02 361.442 51.88L358.022 49.48C358.022 47.36 358.552 45.46 359.612 43.78C360.672 42.1 362.092 40.77 363.872 39.79C365.672 38.81 367.682 38.32 369.902 38.32C372.442 38.32 374.522 38.86 376.142 39.94C377.782 41.02 378.992 42.46 379.772 44.26C380.552 46.06 380.942 48.04 380.942 50.2V71.5H372.782Z" fill="${textColor}"/>
                </svg>`
        default:
            return errorIcon(params)
    }
}
