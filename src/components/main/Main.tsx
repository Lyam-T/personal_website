import {JSX} from "react"

import styles from "./Main.module.css"

function Main(): JSX.Element {
    return (
        <main className={styles.main}>
            <h2>
                Hello, This is <span style={{color: 'blue'}}>Lyam</span>!
                <span role="img"
                      aria-label="waving hand"
                      className={styles.waveEmoji}
                >
                    👋
                </span>
            </h2>
            <p>Welcome to my simple website which is still under construction</p>
        </main>
    )
}

export default Main