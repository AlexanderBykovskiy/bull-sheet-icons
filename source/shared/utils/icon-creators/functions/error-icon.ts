import {typeIconCreateFunctionParams} from '@shared/utils/icon-creators/types'

export const errorIcon = (params: typeIconCreateFunctionParams) => {

    const {iconSize, borderRadius, fillColor, iconColor} = params

    return `<svg viewBox="0 0 340 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${Math.ceil(340 * iconSize / 100)}">
            <rect width="340" height="100" fill="${fillColor}" rx="${borderRadius}" ry="${borderRadius}"/>
            <path d="M77.4639 25.2371V33.1753H50.5567V46.5773H74.6804V54.1031H50.5567V67.6082H78.2887V75.6495H42V25.2371H77.4639Z" fill="${iconColor}"/>
            <path d="M118.549 57.299L131.745 75.6495H120.921L108.859 58.6392H97.7247V75.6495H89.168V25.2371H107.931C115.56 25.2371 121.024 26.543 124.323 29.1546C127.69 31.6976 129.374 35.8557 129.374 41.6289C129.374 49.945 125.766 55.1684 118.549 57.299ZM108.24 51.0103C112.982 51.0103 116.247 50.2887 118.034 48.8454C119.821 47.4021 120.714 44.9622 120.714 41.5258C120.714 38.2268 119.821 35.9931 118.034 34.8247C116.247 33.5876 113.051 32.9691 108.446 32.9691H97.7247V51.0103H108.24Z" fill="${iconColor}"/>
            <path d="M171.088 57.299L184.284 75.6495H173.46L161.398 58.6392H150.264V75.6495H141.707V25.2371H160.47C168.099 25.2371 173.563 26.543 176.862 29.1546C180.229 31.6976 181.913 35.8557 181.913 41.6289C181.913 49.945 178.305 55.1684 171.088 57.299ZM160.779 51.0103C165.521 51.0103 168.786 50.2887 170.573 48.8454C172.36 47.4021 173.253 44.9622 173.253 41.5258C173.253 38.2268 172.36 35.9931 170.573 34.8247C168.786 33.5876 165.59 32.9691 160.985 32.9691H150.264V51.0103H160.779Z" fill="${iconColor}"/>
            <path d="M217.545 31.732C212.528 31.732 208.301 33.5189 204.865 37.0928C201.428 40.6667 199.71 44.9966 199.71 50.0825C199.71 55.1684 201.428 59.4983 204.865 63.0722C208.301 66.5773 212.528 68.3299 217.545 68.3299C222.562 68.3299 226.789 66.5773 230.225 63.0722C233.662 59.4983 235.38 55.1684 235.38 50.0825C235.38 44.9966 233.662 40.6667 230.225 37.0928C226.789 33.5189 222.562 31.732 217.545 31.732ZM217.545 76.165C209.985 76.165 203.662 73.6907 198.576 68.7423C193.49 63.7251 190.947 57.5052 190.947 50.0825C190.947 42.6598 193.49 36.4742 198.576 31.5258C203.662 26.5086 209.985 24 217.545 24C225.105 24 231.428 26.5086 236.514 31.5258C241.6 36.4742 244.143 42.6598 244.143 50.0825C244.143 57.5052 241.566 63.6907 236.411 68.6392C231.256 73.6564 224.968 76.165 217.545 76.165Z" fill="${iconColor}"/>
            <path d="M284.272 57.299L297.468 75.6495H286.643L274.581 58.6392H263.447V75.6495H254.891V25.2371H273.654C281.282 25.2371 286.746 26.543 290.045 29.1546C293.413 31.6976 295.097 35.8557 295.097 41.6289C295.097 49.945 291.489 55.1684 284.272 57.299ZM273.963 51.0103C278.705 51.0103 281.97 50.2887 283.757 48.8454C285.544 47.4021 286.437 44.9622 286.437 41.5258C286.437 38.2268 285.544 35.9931 283.757 34.8247C281.97 33.5876 278.774 32.9691 274.169 32.9691H263.447V51.0103H273.963Z" fill="${iconColor}"/>
        </svg>`
}
