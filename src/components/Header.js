import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink,useNavigate} from "react-router-dom";
const Header = props => {
    const navigate = useNavigate();
    

    const clickBrand = ()=>{
        navigate('/');

    }

    return (
       
        <Navbar bg="light" expand="lg">
            <Container fluid className="px-5">
                <Navbar.Brand className="main-logo user-select-none col-lg-6"><span className="p-1 brand" onClick={clickBrand}>ishakcoban</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <div className="links-wrapper d-flex w-100 justify-content-evenly align-items-center">
                        <NavLink activeClassName="active" to="/" className="links d-flex justify-content-center">ANASAYFA</NavLink>
                        <NavLink activeClassName="active" to="/Drawings" className="links d-flex justify-content-center">ÇİZİMLER</NavLink>
                        <NavLink activeClassName="active" to="/Photos" className=" links d-flex justify-content-center">FOTOĞRAFLAR</NavLink>
                        <NavLink activeClassName="active" to="/About" className="links d-flex justify-content-center">HAKKINDA</NavLink>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}

export default Header; 