import Head from "next/head";
import Link from "next/link";


export default function Shirt() {
    return (
        <>
            <Head>
                <title>Shirt</title>
                <meta name='keywords' content='Shirt' />
                <meta name='description' content='This is the shirt page' />
            </Head>
            <div>
                <h1>Shirt</h1>
                <p>Shirt - R$19,90</p>
            </div>
            <div>
                <Link href="../products">Products</Link>
            </div>
        </>
    )
}