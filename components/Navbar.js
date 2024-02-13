import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="../products">Produtos</Link>
                </li>
                <li>
                    <Link href="../about">Sobre</Link>
                </li>
            </ul>
        </div>
    )
}