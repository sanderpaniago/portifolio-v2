import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html style={{scrollBehavior: 'smooth'}}>
                <Head >
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Press+Start+2P&display=swap" rel="stylesheet" />

                    <meta name="description" content="Portifólio Sander Paniago" />
                    <meta name="keywords" content="HTML, CSS, JavaScript, React.js, Next.js, Tailwind, Typescript" />
                    <meta name="author" content="Sander Pereira Paniago" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument