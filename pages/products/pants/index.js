import Head from "next/head";
import Link from "next/link";

export default function Pants() {
    return (
        <>
            <Head>
                <title>Pants</title>
                <meta name='keywords' content='Pants' />
                <meta name='description' content='This is the pants page' />
            </Head>
            <div>
                <h1>Pants</h1>
                <p>Pants - R$29,90</p>
            </div >
            <div>
                <Link href="../products/pants/bluepant">Blue Pants</Link>
            </div>
            <div>
                <Link href="../products/pants/redpant">Red Pants</Link>
            </div>
        </>
    )
}