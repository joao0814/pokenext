import Head from "next/head";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name='keywords' content='João Pedro de Melo França, web development, programming, studying, training' />
                <meta name='description' content='This is a web development' />
            </Head>
            <div >
                <h1>About</h1>
                <p>This is the about page</p>
                <div>
                    <Link href="/">Return</Link>
                </div>
            </div>
        </>
    )
}