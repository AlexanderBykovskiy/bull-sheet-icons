import React from 'react'
import classes from './styles.module.sass'
import {ContentBlock} from '@shared/ui/content-block'

export const IconConfiguratorWidget: React.FC = () => {
    return (
        <div className={classes['ic-container']}>
            <ContentBlock label="Preview" padding="sm">
                Preview
            </ContentBlock>
            <ContentBlock label="Properties" padding="sm">
                Properties
            </ContentBlock>
            <ContentBlock label="Icons" padding="sm">
                Icons
            </ContentBlock>
        </div>
    )
}
