import Link from "next/link";
import styles from  "./Navbar.module.css"

export default function Navbar () {
    return (
        <nav>
          <ul className={styles.navigation}>
            <li>
                <Link href="/" className={styles.link}>Home</Link> 
                <Link href="/about" className={styles.link}>About</Link> 
            </li>
          </ul>
        </nav>
    )
}