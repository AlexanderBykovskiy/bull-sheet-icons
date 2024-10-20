import {iconCollections} from '@shared/configs/icons.config'

export type typeCollectionButtonProps = {
    collectionPanelList: {
        collection: iconCollections,
        isSelected: boolean
    }[]
    onChangeCurrentCollection: (collection: iconCollections) => void
}
