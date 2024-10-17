import React from 'react'
import classes from './styles.module.sass'
import {ContentBlock} from '@shared/ui/content-block'

export const IconConfiguratorWidget: React.FC = () => {
    return (
        <div className={classes['ic-container']}>
            <div className={classes.preview}>
                <ContentBlock label="Preview" padding="sm">
                    Preview
                </ContentBlock>
            </div>
            <div className={classes.properties}>
                <ContentBlock label="Properties" padding="sm">
                    Properties
                </ContentBlock>
            </div>
            <div className={classes.icons}>
                <ContentBlock label="Icons" padding="sm">
                    <div>Icons</div>
                </ContentBlock>
            </div>
        </div>
    )
}
