import {iconVariants} from "@shared/configs/icons.config";

export const isValidIconVariant = (iconVariant: string): boolean => {
    return (Object.values(iconVariants) as string[]).includes(iconVariant)
}
