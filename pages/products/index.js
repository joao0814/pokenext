import Head from "next/head";
import Link from "next/link";

export default function Products() {
    return (
        <>
            <Head>
                <title>Products</title>
                <meta name='keywords' content='Products' />
                <meta name='description' content='This is the products page' />
            </Head>
            <div>
                <h1>Products</h1>
                <p>This is the products page</p>
            </div>
            <div>
                <div>
                    <Link href="/">Return to home</Link>
                </div>
                <div>
                    <Link href="../products/pants">Pants</Link>
                </div>
                <div>
                    <Link href="../products/shirt">Shirt</Link>
                </div>
            </div>

        </>
    )
}