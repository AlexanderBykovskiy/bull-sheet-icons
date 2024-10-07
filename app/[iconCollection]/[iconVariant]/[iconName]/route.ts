import {NextRequest} from 'next/server'
import {typeRequestParams} from "./types";
import {iconRequestHeaders} from "@shared/configs/icon-request.config";
import {createIconByUrlParams} from "@features/create-icon-by-url-params";

export async function GET(request: NextRequest, requestContext: typeRequestParams){

    const svgIconAsText: string = createIconByUrlParams({
        iconCollection: requestContext.params.iconCollection,
        iconVariant: requestContext.params.iconVariant,
        iconName: requestContext.params.iconName,
    }, request.nextUrl.searchParams)

    return new Response(svgIconAsText, iconRequestHeaders)
}
