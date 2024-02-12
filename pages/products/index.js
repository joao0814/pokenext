import Link from "next/link";

export default function Products() {
    return (
        <div>
            <h1>Products</h1>
            <p>This is the products page</p>
            <ul>
                <li><Link href="/">Voltar</Link></li>
            </ul>
        </div >
    )
}