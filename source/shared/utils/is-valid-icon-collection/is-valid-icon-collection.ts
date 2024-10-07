import {iconCollections} from "@shared/configs/icons.config";

export const isValidIconCollection = (iconCollection: string): boolean => {
    return (Object.values(iconCollections) as string[]).includes(iconCollection)
}
