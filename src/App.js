import { Home } from "./pages/Home";
import "./App.css"
import { Logo } from "./components/homePagelines/Logo";
import { ViewButton } from "./components/buttons/homePageButtons/ViewButton";
import { ForPractise } from "./pages/ForPractise";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { FilterSection } from "./components/FilterSection";
import { FilterButton } from "./components/buttons/FilterButton";
import { Drawings } from "./pages/Drawings";
import { About } from "./pages/About";

function App() {
    document.body.classList.add('body-background');
    return (
        <div className="user-select-none">
            <Header></Header>
            <Drawings></Drawings>

            <Footer></Footer>

        </div>
    );
}

export default App;
