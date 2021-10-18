import React,{ useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ".././style.scss";
import {Zoom, Fade} from 'react-reveal'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import about from "./about.svg";
import questions from"./questions.svg";






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

        <div className="about-bg">
          <div className="container">

            <article className="about">
              <div className="about-left">
                <h2>O NAMA</h2>
                <img src={about} alt="about"/>
              </div>

              <div className="about-right">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi, elementum tincidunt nisi vehicula ut. Proin sit amet sagittis neque, nec tincidunt lacus. Sed suscipit urna facilisis risus congue, ut mollis dui vestibulum. Nam at est ut felis accumsan vulputate.</p>
              </div>

            </article>
          </div>
        </div>

        <div className="questions-bg">
          <div className="container">
            <article className="questions">
              <div className="questions-left">
                <p>Ako imate ikakvih pitanja slobodno nam se javite na kontakt mail primjer@3dkod.hr</p>
              </div>

              <div className="questions-right">
                <h2>PITANJA?</h2>
                <img src={questions} alt="about"/>
              
              </div>
            </article>
          </div>
        </div>

        <div className="galerija container">
          <div className="galerija-left">
            <h2>GALERIJA</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi.</p>
            <Link to="/galerija" className="rounded-pill">Galerija</Link>
          </div>

          <div className="galerija-right">
            <iframe  src="https://www.youtube.com/embed/t8aU5A9XC0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="recenzije">
          <div className="container">
            <h2>RECENZIJE</h2>
            <div className="recenzije-boxes">
              <div className="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi, elementum tincidunt nisi vehicula ut. Proin sit amet sagittis neque, nec tincidunt lacus.</p>
              </div>

              <div className="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi, elementum tincidunt nisi vehicula ut. Proin sit amet sagittis neque, nec tincidunt lacus.</p>
              </div>

              <div className="box">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi, elementum tincidunt nisi vehicula ut. Proin sit amet sagittis neque, nec tincidunt lacus.</p>
              </div>

              <div></div>
            </div>
          </div>
        </div>

        <div className="kontakt-wrapper">
          <div className="container">
            <h2>KONTAKT</h2>
            <p>Za sve upite pošaljite mail na primjer@3dkod.hr</p>

            <div className="email-home">
              <label>Email:</label>
              <input type="email"></input>
              <button>Send</button>
            </div>
          </div>

        </div>

        </body>
      
    );
  }
  
  export default Home;