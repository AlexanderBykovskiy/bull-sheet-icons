import {NextRequest} from 'next/server'
import {typeRequestParams} from "./types";
import {
    getIconParamsFromSearchParams
} from "@shared/utils/get-icon-params-from-search-params/get-icon-params-from-search-params";

export async function GET(request: NextRequest, params: typeRequestParams){

    const iconParams = getIconParamsFromSearchParams(request.nextUrl.searchParams)

    console.log('-'.repeat(100))
    console.log(params)
    console.log('-'.repeat(100))

    const svg = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${iconParams.iconSize}" height="${iconParams.iconSize}" viewBox="0 0 800 800" xml:space="preserve">
      <rect width="800" height="800" fill="${iconParams.fillColor}" rx="${iconParams.borderRadius}" ry="${iconParams.borderRadius}"/>
      <rect fill="${iconParams.iconColor}" x="130.1" y="307.5" width="118.7" height="357.1"/>
      <path fill="${iconParams.iconColor}" d="M189.5,258.8h-0.8c-39.8,0-65.6-27.4-65.6-61.7c0-35,26.6-61.7,67.2-61.7s65.6,26.7,66.4,61.7C256.6,231.4,230.9,258.8,189.5,258.8z"/>
      <path fill="${iconParams.iconColor}" d="M676.9,664.6H558.2v-191c0-48-17.2-80.7-60.1-80.7c-32.8,0-52.3,22.1-60.9,43.4c-3.1,7.6-3.9,18.2-3.9,28.9v199.4H314.5c0,0,1.6-323.6,0-357.1h118.7v50.6c15.8-24.3,43.9-59,107-59c78.1,0,136.7,51,136.7,160.7V664.6z"/>
    </svg>
  `

    const responseOptions = {
        headers: {'Content-Type': 'image/svg+xml'},
        status: 200,
        statusText: 'OK'
    }

    return new Response(svg, responseOptions)
}
