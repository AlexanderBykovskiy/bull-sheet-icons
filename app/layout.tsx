import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import React from 'react'
import {HeaderWidget} from '@widgets/header/header-widget'
import {primaryFont} from '@shared/configs/font.config'
import {FooterWidget} from '@widgets/footer/footer'



export const metadata: Metadata = {
    title: 'bull-sheet-icons',
    description: 'A collection of icons that can be customized and integrated into your website.',
    icons: {
        icon: [
            { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
    },
}

const RootLayout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <HeaderWidget/>
        <div className="content-container">
          {children}
        </div>
        <FooterWidget/>
      </body>
    </html>
  )
}

export default RootLayout
