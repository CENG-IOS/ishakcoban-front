import "./App.css"
import {useSelector,useDispatch} from "react-redux";
import { PopupActions } from "./store/slices/Popup";
import {
    BrowserRouter,
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import { Suspense,lazy } from "react";
import ViewButton from "./components/buttons/homePageButtons/ViewButton";
const Drawings = lazy(() => import('./pages/Drawings'));
const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const About = lazy(() => import('./pages/About'));
const Photos = lazy(() => import('./pages/Photos'));

function App() {
    const dispatch = useDispatch();
    document.body.classList.add('body-background');
    const popupState = useSelector((state)=> state.popup.popupState)
    return (
        <div className="user-select-none position-relative">
        <Suspense fallback={<div class="spinner-border" role="status">
      </div>}>
            <BrowserRouter>
    
                {/* <ScrollToTop />*/}

                {<Header></Header>}
                {<Routes>
                    <Route path="/ViewButton" element={<ViewButton/>}/>
                
                    <Route exact path="/" element={<Home/>} />

                    <Route path="/Drawings" element={<Drawings/>} />
                    <Route path="/Photos" element={<Photos/>} />
                    <Route path="/About" element={<About/>} />
                <Route path="/Drawings/:drawingID" element={<Drawings/>}/>
                </Routes>}
                {<Footer></Footer>}
            </BrowserRouter>




            </Suspense>
        </div>
    );
}

export default App;
