
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Children } from 'react'

class CustomDocument extends Document {

    render() {


        return (<Html lang='en' >
            <Head>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }
}

CustomDocument.getInitialProps = async ctx => {
    const originalRenderPage = ctx.renderPage



    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props =>
            (
                <App
                    {...props}

                />
            )
        })

    const initialProps = await Document.getInitialProps(ctx)



    return {
        ...initialProps,
        styles: [...Children.toArray(initialProps.styles)]
    }
}


export default CustomDocument