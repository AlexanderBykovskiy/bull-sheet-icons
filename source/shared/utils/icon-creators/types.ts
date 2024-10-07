type typeIcon = {
    iconSize: number
}

type typeIconFill = {
    fillColor: string
    iconColor: string
}

type typeIconRectangle = {
    borderRadius: number
}


export type typeIconFillCircleCreateFunctionParams = typeIcon & typeIconFill
export type typeIconFillRectangleCreateFunctionParams = typeIcon & typeIconFill & typeIconRectangle

