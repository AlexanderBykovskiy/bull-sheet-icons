import React from 'react'
import {typePreviewIconsProps} from '@shared/ui/preview-icons/types'
import {iconCollections} from '@shared/configs/icons.config'
import {ErrorIcon} from './icons/error-icon'
import {TJsIcon} from './icons/t-js-icon'
import {SmYoutubeIcon} from './icons/sm-youtube-icon'
import {SmFacebookIcon} from './icons/sm-facebook-icon'
import {SmInstagramIcon} from './icons/sm-instagram-icon'
import {SmLinkedinIcon} from './icons/sm-linkedin-icon'
import {SmOdnoklassnikiIcon} from './icons/sm-odnoklassniki-icon'
import {SmTelegramIcon} from '@shared/ui/preview-icons/icons/sm-telegram-icon'
import {SmTiktokIcon} from '@shared/ui/preview-icons/icons/sm-tiktok-icon'
import {SmTwitterIcon} from '@shared/ui/preview-icons/icons/sm-twitter-icon'
import {SmVkontakteIcon} from '@shared/ui/preview-icons/icons/sm-vkontakte-icon'
import {SmWhatsappIcon} from '@shared/ui/preview-icons/icons/sm-whatsapp-icon'
import {SmXIcon} from '@shared/ui/preview-icons/icons/sm-x-icon'
import {SmSkypeIcon} from '@shared/ui/preview-icons/icons/sm-skype-icon'

export const PreviewIcons: React.FC<typePreviewIconsProps> = ({iconCollection, iconName}) => {

    switch (`${iconCollection}-${iconName}`) {
        case `${iconCollections.technologies}-js`:
            return <TJsIcon/>

        case `${iconCollections.socialMedia}-facebook`:
            return <SmFacebookIcon/>
        case `${iconCollections.socialMedia}-instagram`:
            return <SmInstagramIcon/>
        case `${iconCollections.socialMedia}-linkedin`:
            return <SmLinkedinIcon/>
        case `${iconCollections.socialMedia}-odnoklassniki`:
            return <SmOdnoklassnikiIcon/>
        case `${iconCollections.socialMedia}-telegram`:
            return <SmTelegramIcon/>
        case `${iconCollections.socialMedia}-skype`:
            return <SmSkypeIcon/>
        case `${iconCollections.socialMedia}-tiktok`:
            return <SmTiktokIcon/>
        case `${iconCollections.socialMedia}-twitter`:
            return <SmTwitterIcon/>
        case `${iconCollections.socialMedia}-vkontakte`:
            return <SmVkontakteIcon/>
        case `${iconCollections.socialMedia}-whatsapp`:
            return <SmWhatsappIcon/>
        case `${iconCollections.socialMedia}-x`:
            return <SmXIcon/>
        case `${iconCollections.socialMedia}-youtube`:
            return <SmYoutubeIcon/>

        default:
            return <ErrorIcon/>
    }
}
