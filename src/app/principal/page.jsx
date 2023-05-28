import React from "react";
import './style.css';
import Image from "next/image";

import TargetNew from "./TargetNew";
import TargetNew2 from "./TargetNew2";
import TargetNew3 from "./TargetNew3";
import LastNews from "./LastNews";
import SideNews from "./SideNews";

function PeriodicoPage() {
  return (
    <div>
      <header>
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <a href="#" className="nombre">Al Instante</a>
        <div className="grupo">
          <ul className="navegation">
            <li><a href="#">Principal</a></li>
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Sociales</a></li>
            <li><a href="#">Espectaculos</a></li>
            <li><a href="#">Música</a></li>
          </ul>
        </div>
      </header>

      <div className="portada">
        <div className="presentation" id="principal">
          <div className="text">
            <h1>Bienvenidx "Al Instante", El Periodico de las noticias.</h1>
            <p>El Periodico con las mejores noticias de El Mante y el Tec Mante 10/10</p>
            <div className="enlaces">
              <a href="#footer" className="negro">Conocenos!</a>
              <a href="#" className="verde" target="_blank">Apoyanos!</a>
            </div>

          </div>
          <img src="./newswp.svg" alt="" width="350px" />
        </div>
      </div>

      <p id="titulo">Espectaculos</p>
          <hr></hr>
          <br></br>
      
      <div className="body-espectaculos">

        <div className="seccion-1">
          <TargetNew/>
        </div>

        <div className="seccion-2">
          
          <TargetNew2 />
          <TargetNew2 />  

        </div>

        <div className="seccion-3">
          
          <TargetNew3 />
          <TargetNew3 />
          <TargetNew3 />

        </div>

      </div>

      <div className="body">

        <div className="seccion-ult">
          <p id="titulo">Últimas noticias</p>
          <hr></hr>
          <br></br>

          <div className="contenedor">
          <LastNews />
          <LastNews />
          </div>
          <div className="contenedor">
          <LastNews />
          <LastNews />
          </div>

        </div>


        <div className="seccion-top">
          <p id="titulo">Música</p>
          <hr></hr>
          <br></br>

          <SideNews />

        </div>

      </div>



      <footer>
        <section className="footer">
          <div className="social">
            <a href="#"><Image src="./facebook.svg" width={20} height={20} alt="" /></a>
            <a href="#"><Image src="./instagram.svg" width={20} height={20} alt="" /></a>
            <a href="#"><Image src="./twitter.svg" width={20} height={20} alt="" /></a>
            <a href="#"><Image src="./tiktok.svg" width={20} height={20} alt="" /></a>
          </div>
          <ul className="lista">
            <li><a href="">Principal</a></li>
            <li><a href="">Noticias</a></li>
            <li><a href="">Espectaculos</a></li>
            <li><a href="">Música</a></li>
          </ul>
          <p className="copyright">
            Al Instante @2023
          </p>
        </section>
      </footer>
    </div>
  );
}

export default PeriodicoPage;