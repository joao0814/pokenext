import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <div>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="../products">Products</Link>
                </li>
                <li>
                    <Link href="../about">About</Link>
                </li>
                <li>
                    <Link href="../contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}   