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
import { Grid } from "./components/Grid";


function App() {
    document.body.classList.add('body-background');
    return (
        <div className="user-select-none">
        <Header></Header>
        <Drawings></Drawings>
       {/* <div className="container">
        <div className="row mt-5 mb-5 bg-danger ">
        <div className="col-4  d-flex justify-content-center"><Grid></Grid></div>
        <div className="col-4 d-flex justify-content-center"><Grid></Grid></div>
        <div className="col-4 d-flex justify-content-center"><Grid></Grid></div>
        
        </div>
      
   
    </div>*/}
          
   

            <Footer></Footer>

        </div>
    );
}

export default App;
