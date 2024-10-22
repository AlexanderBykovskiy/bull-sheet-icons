import {
    typeIconCreateFunctionParams
} from '../../icon-creators/types'
import {iconVariants} from '@shared/configs/icons.config'
import {errorIcon} from './error-icon'

export const okIcon = (variant: iconVariants, params: typeIconCreateFunctionParams): string => {

    const {iconSize, borderRadius, borderWeight, fillColor, iconColor, backgroundColor, textColor} = params

    switch (variant) {
        case iconVariants.squareFill:
            return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <rect width="100" height="100" fill="${fillColor}" rx="${borderRadius}" ry="${borderRadius}"/>
                    <path d="M56.783 65.4072C60.6443 64.5119 64.0524 63.0558 67.1149 61.1067L66.9817 61.186C68.3925 60.254 69.3104 58.6732 69.3104 56.8799C69.3104 54.0384 67.0072 51.7352 64.1657 51.7352C63.1799 51.7352 62.2591 52.0128 61.4772 52.4916L61.4999 52.4774C58.1456 54.605 54.0633 55.8657 49.6864 55.8657C45.3094 55.8657 41.2243 54.6022 37.7822 52.4236L37.8728 52.4774C37.0966 51.9817 36.1504 51.687 35.1334 51.687C33.3146 51.687 31.7168 52.6333 30.8017 54.0582L30.7904 54.0781C30.7904 54.0781 30.7904 54.0781 30.7904 54.0922C30.2946 54.8685 30 55.8147 30 56.8317C30 58.6533 30.949 60.2511 32.3769 61.1634L32.3967 61.1747C35.326 63.0473 38.7341 64.5006 42.3745 65.3477L42.5954 65.3902L32.7678 75.2064C31.8273 76.1328 31.2437 77.419 31.2437 78.844C31.2437 80.2293 31.7961 81.4843 32.6885 82.4022L32.7735 82.4872C33.697 83.4136 34.9747 83.9858 36.3855 83.9858C37.7964 83.9858 39.074 83.4136 39.9976 82.4872L49.6892 72.8437L59.3213 82.4929C60.2506 83.4221 61.5367 84 62.956 84C65.7947 84 68.0951 81.6996 68.0951 78.861C68.0951 77.4417 67.52 76.1583 66.5908 75.2263L56.783 65.4072ZM49.6864 51.0949C59.3695 51.0864 67.2168 43.2334 67.2168 33.5475C67.2168 23.8559 59.361 16 49.6694 16C39.9778 16 32.1219 23.8559 32.1219 33.5475V33.5645C32.1417 43.2504 39.9976 51.0949 49.6864 51.0949ZM49.6864 26.2837C53.7007 26.2837 56.953 29.536 56.953 33.5503C56.953 37.5646 53.7007 40.8169 49.6864 40.8169C45.6777 40.8169 42.4254 37.5703 42.4198 33.5616C42.4198 33.5588 42.4198 33.5588 42.4198 33.556C42.4198 29.5416 45.672 26.2865 49.6864 26.2837Z" fill="${iconColor}"/>
                </svg>`
        case iconVariants.circleFill:
            return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}">
                    <circle cx="50" cy="50" r="50" fill="${fillColor}"/>
                    <path d="M56.783 65.4072C60.6443 64.5119 64.0524 63.0558 67.1149 61.1067L66.9817 61.186C68.3925 60.254 69.3104 58.6732 69.3104 56.8799C69.3104 54.0384 67.0072 51.7352 64.1657 51.7352C63.1799 51.7352 62.2591 52.0128 61.4772 52.4916L61.4999 52.4774C58.1456 54.605 54.0633 55.8657 49.6864 55.8657C45.3094 55.8657 41.2243 54.6022 37.7822 52.4236L37.8728 52.4774C37.0966 51.9817 36.1504 51.687 35.1334 51.687C33.3146 51.687 31.7168 52.6333 30.8017 54.0582L30.7904 54.0781C30.7904 54.0781 30.7904 54.0781 30.7904 54.0922C30.2946 54.8685 30 55.8147 30 56.8317C30 58.6533 30.949 60.2511 32.3769 61.1634L32.3967 61.1747C35.326 63.0473 38.7341 64.5006 42.3745 65.3477L42.5954 65.3902L32.7678 75.2064C31.8273 76.1328 31.2437 77.419 31.2437 78.844C31.2437 80.2293 31.7961 81.4843 32.6885 82.4022L32.7735 82.4872C33.697 83.4136 34.9747 83.9858 36.3855 83.9858C37.7964 83.9858 39.074 83.4136 39.9976 82.4872L49.6892 72.8437L59.3213 82.4929C60.2506 83.4221 61.5367 84 62.956 84C65.7947 84 68.0951 81.6996 68.0951 78.861C68.0951 77.4417 67.52 76.1583 66.5908 75.2263L56.783 65.4072ZM49.6864 51.0949C59.3695 51.0864 67.2168 43.2334 67.2168 33.5475C67.2168 23.8559 59.361 16 49.6694 16C39.9778 16 32.1219 23.8559 32.1219 33.5475V33.5645C32.1417 43.2504 39.9976 51.0949 49.6864 51.0949ZM49.6864 26.2837C53.7007 26.2837 56.953 29.536 56.953 33.5503C56.953 37.5646 53.7007 40.8169 49.6864 40.8169C45.6777 40.8169 42.4254 37.5703 42.4198 33.5616C42.4198 33.5588 42.4198 33.5588 42.4198 33.556C42.4198 29.5416 45.672 26.2865 49.6864 26.2837Z" fill="${iconColor}"/>
                </svg>`
        case iconVariants.rectangleFill:
            return `<svg viewBox="0 0 246 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${Math.ceil(iconSize * 246 / 100)}">
                    <mask id="mask" x="0" y="0" width="246" height="100">
                        <rect x="0" y="0" width="246" height="100" fill="black"/>
                        <rect x="0" y="0" width="246" height="100" rx="${borderRadius}" fill="white"/>
                    </mask>
                    <rect x="${borderWeight / 2}" y="${borderWeight / 2}" width="${246 - borderWeight}" height="${100 - borderWeight}" rx="${borderRadius}" stroke="${fillColor}" fill="${backgroundColor}" stroke-width="${borderWeight}"/>
                    <rect width="100" height="100" fill="${fillColor}" mask="url(#mask)"/>
                    <path d="M56.783 65.4072C60.6443 64.5119 64.0524 63.0558 67.1149 61.1067L66.9817 61.186C68.3925 60.254 69.3104 58.6732 69.3104 56.8799C69.3104 54.0384 67.0072 51.7352 64.1657 51.7352C63.1799 51.7352 62.2591 52.0128 61.4772 52.4916L61.4999 52.4774C58.1456 54.605 54.0633 55.8657 49.6864 55.8657C45.3094 55.8657 41.2243 54.6022 37.7822 52.4236L37.8728 52.4774C37.0966 51.9817 36.1504 51.687 35.1334 51.687C33.3146 51.687 31.7168 52.6333 30.8017 54.0582L30.7904 54.0781C30.7904 54.0781 30.7904 54.0781 30.7904 54.0922C30.2946 54.8685 30 55.8147 30 56.8317C30 58.6533 30.949 60.2511 32.3769 61.1634L32.3967 61.1747C35.326 63.0473 38.7341 64.5006 42.3745 65.3477L42.5954 65.3902L32.7678 75.2064C31.8273 76.1328 31.2437 77.419 31.2437 78.844C31.2437 80.2293 31.7961 81.4843 32.6885 82.4022L32.7735 82.4872C33.697 83.4136 34.9747 83.9858 36.3855 83.9858C37.7964 83.9858 39.074 83.4136 39.9976 82.4872L49.6892 72.8437L59.3213 82.4929C60.2506 83.4221 61.5367 84 62.956 84C65.7947 84 68.0951 81.6996 68.0951 78.861C68.0951 77.4417 67.52 76.1583 66.5908 75.2263L56.783 65.4072ZM49.6864 51.0949C59.3695 51.0864 67.2168 43.2334 67.2168 33.5475C67.2168 23.8559 59.361 16 49.6694 16C39.9778 16 32.1219 23.8559 32.1219 33.5475V33.5645C32.1417 43.2504 39.9976 51.0949 49.6864 51.0949ZM49.6864 26.2837C53.7007 26.2837 56.953 29.536 56.953 33.5503C56.953 37.5646 53.7007 40.8169 49.6864 40.8169C45.6777 40.8169 42.4254 37.5703 42.4198 33.5616C42.4198 33.5588 42.4198 33.5588 42.4198 33.556C42.4198 29.5416 45.672 26.2865 49.6864 26.2837Z" fill="${iconColor}"/>
                    <path d="M152.74 72.4C148.42 72.4 144.69 71.46 141.55 69.58C138.43 67.7 136.02 65.07 134.32 61.69C132.64 58.31 131.8 54.38 131.8 49.9C131.8 45.42 132.64 41.49 134.32 38.11C136.02 34.73 138.43 32.1 141.55 30.22C144.69 28.34 148.42 27.4 152.74 27.4C157.06 27.4 160.78 28.34 163.9 30.22C167.04 32.1 169.45 34.73 171.13 38.11C172.83 41.49 173.68 45.42 173.68 49.9C173.68 54.38 172.83 58.31 171.13 61.69C169.45 65.07 167.04 67.7 163.9 69.58C160.78 71.46 157.06 72.4 152.74 72.4ZM152.74 64.72C155.48 64.76 157.76 64.17 159.58 62.95C161.4 61.73 162.76 60 163.66 57.76C164.58 55.52 165.04 52.9 165.04 49.9C165.04 46.9 164.58 44.3 163.66 42.1C162.76 39.9 161.4 38.19 159.58 36.97C157.76 35.75 155.48 35.12 152.74 35.08C150 35.04 147.72 35.63 145.9 36.85C144.08 38.07 142.71 39.8 141.79 42.04C140.89 44.28 140.44 46.9 140.44 49.9C140.44 52.9 140.89 55.5 141.79 57.7C142.71 59.9 144.08 61.61 145.9 62.83C147.72 64.05 150 64.68 152.74 64.72ZM179.669 71.5V28.3H187.829V48.22L204.269 28.3H214.229L196.169 49.6L215.369 71.5H205.049L187.829 51.82V71.5H179.669Z" fill="${textColor}"/>
                </svg>`
        default:
            return errorIcon(params)
    }
}
