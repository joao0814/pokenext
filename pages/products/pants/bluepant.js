import Head from "next/head";
import Link from "next/link";

export default function Bluepant() {
    return (
        <>
            <Head>
                <title>Blue Pants</title>
                <meta name='keywords' content='Blue Pants' />
                <meta name='description' content='This is a blue pants' />
            </Head>
            <div>
                <h1>Blue Pants</h1>
                <p>Blue Pants - R$29,90</p>
            </div>
            <div>
                <Link href="../pants/redpant">Red Pants</Link>
            </div>
            <div>
                <Link href="../">Products</Link>
            </div>
        </>
    )
}