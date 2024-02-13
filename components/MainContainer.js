import Navbar from "./Navbar";
import styles from '../styles/Home.module.css'
import Footer from "./Footer";

export default function MainContainer({ children }) {
    return (
        <>
            <Navbar />
            <div className={styles.container}>{children}</div>
            <Footer />
        </>
    )
}