'use client'

import React from 'react'
import classes from './styles.module.sass'
import {ContentBlock} from '@shared/ui/content-block'
import {iconCollections, iconListObj} from '@shared/configs/icons.config'
import {IconList} from '@features/icon-list'
import {CollectionButtonPanel} from '@features/collection-button-panel'

export const IconConfiguratorWidget: React.FC = () => {

    // const [currentIconProperties, setCurrentIconProperties] = React.useState('')
    const [collectionList, setCollectionList] = React.useState(() => (Object.keys(iconListObj) as iconCollections[]).map((item: iconCollections, index) => {
        return {
            collection: item,
            isSelected: index === 0
        }
    }))

    const [currentCollection, setCurrentCollection] = React.useState<iconCollections>((Object.keys(iconListObj) as iconCollections[])[0])

    const onChangeCurrentCollection = (collection: iconCollections) => {
        setCurrentCollection(collection)
        const newCollectionList = collectionList.map((item) => {
            return {
                ...item,
                isSelected: item.collection === collection
            }
        })
        setCollectionList(newCollectionList)
    }

    return (
        <div className={classes['ic-container']}>
            <div className={classes.preview}>
                <ContentBlock label="Preview">
                    Preview
                </ContentBlock>
            </div>
            <div className={classes.properties}>
                <ContentBlock label="Properties" padding="sm">
                    Properties
                </ContentBlock>
            </div>
            <div className={classes.icons}>
                <CollectionButtonPanel
                    collectionPanelList={collectionList}
                    onChangeCurrentCollection={onChangeCurrentCollection}
                />
                <ContentBlock label="Icons" padding="lg">
                    <IconList
                        collection={currentCollection}
                    />
                </ContentBlock>
            </div>
        </div>
    )
}
