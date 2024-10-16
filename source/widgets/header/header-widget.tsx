import React from 'react'
import classes from './styles.module.sass'
import {Logo} from '@shared/ui/logo/logo'

export const HeaderWidget: React.FC = () => {
    return (
        <header className={classes.header}>
            <div className="content-block-container">

                <div className={classes.logo}>
                    <Logo/>
                </div>

            </div>
        </header>
)}
