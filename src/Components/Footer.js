import React from 'react';
import ".././style.scss";
import {Link} from 'react-router-dom';
import logo from "./3dkod.svg";

function Footer(){

    return(
        <body>
             <div className="footer">
                <div className="container">
                    <div className="footer-wrapper">
                    <Link to="/" className="logo"><img src={logo}/> </Link>
                        <p>footer blabala</p>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Footer;