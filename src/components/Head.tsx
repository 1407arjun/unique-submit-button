import Head from "next/head"

const PageHead = () => {
    const title = "Unique Submit Button"
    const desc =
        "Implementation of the moving submit button as seen on Instagram Reels"

    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <title>{title}</title>
            <meta name="description" content={desc} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default PageHead
