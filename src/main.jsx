import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar";
import MainHome from "./components/main.home";
import Footer from "./components/footer";
const rootEl = document.getElementById("root");
const root = createRoot(rootEl);

function Home() {
    return (
        <div className="container">
            <nav>
                <Navbar/>
            </nav>
            <main>
                <MainHome/>
            </main>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    )
}


root.render(<Home/>);