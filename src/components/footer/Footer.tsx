import {JSX} from "react"

import styles from "./Footer.module.css"

function Footer(): JSX.Element {
    const currentYear: number = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p className={styles.title}>&copy; {currentYear} Lyam Tang</p>
        </footer>
    )
}

export default Footer