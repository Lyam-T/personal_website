import './App.css'
import {JSX} from "react";

function App() : JSX.Element {
    const currentYear: number = new Date().getFullYear()

    return(
        <div className="App">
            <header>
                <h1>My Personal Website</h1>
            </header>
            <main>
                <section>
                    <p>Welcome to my personal website!</p>
                </section>
            </main>
            <footer>
                <p>© {currentYear} Lyam Tang</p>
            </footer>
        </div>
    );
}

export default App
