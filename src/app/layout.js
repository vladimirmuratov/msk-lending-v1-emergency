import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter'
import {ThemeProvider} from '@mui/material/styles'
import {Montserrat} from 'next/font/google'
import {Box} from '@mui/material'
import {Footer} from '@/components/Footer'
import {Navigation} from '@/components/navigation/Navigation'
import {Metrika} from '@/components/Metrika'
import {Suspense} from 'react'
import theme from '@/theme'
import './globals.css'

const montserrat = Montserrat({subsets: ['latin', 'cyrillic']})

export const metadata = {
    metadataBase: new URL('https://emergency.mskdoctor.ru/'),
    title: 'Экстренная госпитализация в Москве. 8 (499) 719-81-00, 24/7',
    description: 'Организуем срочную госпитализацию в ведущие клиники Москвы круглосуточно. Быстрое реагирование, помощь при неотложных состояниях, индивидуальный подбор медучреждения. Работаем 24/7.',
    keywords: ['платная экстренная госпитализация', 'экстренная платная госпитализация в москве', 'экстренная госпитализация в стационар платно'],
    other: {
        ['yandex-verification']: '643910354c1963f8',
    },
    openGraph: {
        title: 'Экстренная госпитализация. 8 (499) 719-81-00, 24/7',
        description: 'Срочная госпитализация в стационар без очередей. Принимаем 24/7, обеспечим неотложную помощь и полное медицинское сопровождение. Опытные врачи, комфортные условия.',
        images: ['/images/banner2.webp'],
        url: 'https://emergency.mskdoctor.ru/',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation/>
                        {children}
                        <Footer/>
                        <Metrika/>
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}
