import { Manrope } from 'next/font/google'

export const primaryFont = Manrope({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '600'],
    style: ['normal'],
    display: 'swap',
    variable: '--font-primary',
})
