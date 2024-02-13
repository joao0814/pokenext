import Link from "next/link";

export default function About() {
    return (
        <div >
            <h1>About</h1>
            <p>This is the about page</p>
            <ul>
                <li>
                    <Link href="/">Voltar</Link>
                </li>
            </ul>
        </div>
    )
}