import '../styles/main.scss'
import type { AppProps } from 'next/app'
import ThemeController from '../src/utils/theme-controller'
import { GlobalReducerProvider } from '../src/utils/globalState'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalReducerProvider>
            <ThemeController>
                <Component {...pageProps} />
            </ThemeController>
        </GlobalReducerProvider>
    )
}
export default MyApp
