import { Home } from "./pages/Home";
import "./App.css"
import { Logo } from "./components/homePagelines/Logo";
import { ViewButton } from "./components/buttons/homePageButtons/ViewButton";
import { ForPractise } from "./pages/ForPractise";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
    document.body.classList.add('body-background');
    return (
        <div>
            <Header />
            <Home></Home>
            <Footer></Footer>
        </div>
    );
}

export default App;
