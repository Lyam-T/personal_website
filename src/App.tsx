import './App.css'
import Header from './components/header/Header.tsx'
import Main from './components/main/Main.tsx'
import Footer from './components/footer/Footer.tsx'
import {JSX} from "react";

function App() : JSX.Element {
    return(
        <div className="app-container">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App
