import {JSX} from "react";

import styles from "./Header.module.css";

function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>My Personal Website</h1>
        </header>
    )
}

export default Header;