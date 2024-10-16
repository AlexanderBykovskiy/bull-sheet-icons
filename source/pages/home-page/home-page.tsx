import React from 'react'
import {IconConfiguratorWidget} from '@widgets/icon-configurator-widget/icon-configurator-widget'

export const HomePage: React.FC = () => {
    return (
        <main>
            <div className="content-block-container">
                <IconConfiguratorWidget/>
            </div>
        </main>
    )
}
