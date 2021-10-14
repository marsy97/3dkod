import React,{ useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ".././style.scss";
import {Zoom, Fade} from 'react-reveal'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {

    const [reveal,setReveal]=useState(0);
    return (
      
        <body>
          <div className="header">
              <div className="middleText">
              <Fade up >
                    <h1>BRZO, EFIKASNO & 
                        POVOLJNO
                    </h1>

                    <p>Izradite 3D print u najkraćem roku po niskim cijenama.</p>
                    <Link to="/kontakt" className="rounded-pill">Kontakt</Link>

            </Fade>
            </div>
          </div>
        </body>
      
    );
  }
  
  export default Home;