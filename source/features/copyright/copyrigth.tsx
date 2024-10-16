import React from 'react'
import classes from './styles.module.sass'

export const Copyright: React.FC = () => {

    const startYear = '2023'
    const copyrightName = 'Alexander Bykovskiy'
    const copyrightLink = 'https://github.com/AlexanderBykovskiy'

    const currentYear = new Date().getFullYear().toString()

    const yearData = currentYear === startYear ? startYear : startYear + '-' + currentYear

    return(
        <div className={classes.copyright}>
            Copyright &copy; {yearData}. <a href={copyrightLink} target="_blank" className="hover:underline">{copyrightName}</a>
        </div>
    )
}
