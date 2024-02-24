import Head from "next/head";
import Link from "next/link";

export default function Redpant() {
    return (
        <>
            <Head>
                <title>Red Pants</title>
                <meta name='keywords' content='Red Pants' />
                <meta name='description' content='This is a red pants' />
            </Head>
            <div>
                <h1>Red Pants</h1>
                <p>Red Pants - R$29,90</p>
            </div>
            <div>
                <Link href="../pants/bluepant">Blue Pants</Link>
            </div>
            <div>
                <Link href="../">Products</Link>
            </div>
        </>
    )
}