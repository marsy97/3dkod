import React from 'react';
import ".././style.scss";
import {Link} from 'react-router-dom';
import { useHistory, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import logo from "./3dkod.svg";
import Nav from 'react-bootstrap/Nav'



function Navigation() {
    return (
      
        <body>
            <div className="container">
                <div className="nav">
                    <Navbar.Brand>
                        <Link to="/" className="logo">3dkod</Link>
                        
                    </Navbar.Brand>

                    <Nav className="nav-inner">
            
                        <NavLink eventKey="1" as={Link} id="link" activeClassName="plavo" exact to="/">POČETNA</NavLink>
                        <NavLink eventKey="1" as={Link}id="link" activeClassName="plavo"exact to="/kontakt">KONTAKT</NavLink>
                        <NavLink eventKey="1" as={Link}id="link" activeClassName="plavo"exact to="/cjenik">CJENIK</NavLink>
                        <NavLink eventKey="1" as={Link}id="link" activeClassName="plavo"exact to="/galerija">GALERIJA</NavLink>
                        
                    </Nav>
                </div>
          </div>
        </body>
      
    );
  }
  
  export default Navigation;
  