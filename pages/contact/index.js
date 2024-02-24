import Head from "next/head";
import Link from "next/link";

export default function Creator() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name='keywords' content='João Pedro de Melo França, web development, programming, studying, training' />
                <meta name='description' content='This is a web development' />
            </Head>
            <h1>Contact page</h1>
            <p>This is the contact page</p>
            <div>
                <Link href="/">Return</Link>
            </div>
        </ >
    )
}