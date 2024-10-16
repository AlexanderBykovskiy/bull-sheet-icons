import React from 'react'
import classes from './styles.module.sass'
import {Copyright} from '@features/copyright'

export const FooterWidget: React.FC = () => {

    return (
        <footer className={classes.footer}>
            <div className="content-block-container">

                <Copyright/>

            </div>
        </footer>
)}
