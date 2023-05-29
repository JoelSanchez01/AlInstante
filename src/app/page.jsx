/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./principal/style.css";
import Image from "next/image";

import TargetNew from "./principal/TargetNew";
import TargetNew2 from "./principal/TargetNew2";
import TargetNew3 from "./principal/TargetNew3";
import LastNews from "./principal/LastNews";
import SideNews from "./principal/SideNews";
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";

// fetch data from API
async function getNews() {
  const res = await fetch("http://localhost:5000/noticias", {
    cache: "reload",
  });
  const json = await res.json();
  return json;
}

async function PeriodicoPage() {
  const news = await getNews();
  const deportes = news.filter((noticia) => noticia.tipoNoticia === "Deportes");

  const espectaculos = news.filter(
    (noticia) => noticia.tipoNoticia === "Espectaculos"
  );
  const musica = news.filter((noticia) => noticia.tipoNoticia === "Musica");

  return (
    <div>
      <HeaderMain />

      <div className="portada">
        <div className="presentation" id="principal">
          <div className="text">
            <h1>Bienvenidx Al Instante, El Periodico de las noticias.</h1>
            <p>
              El Periodico con las mejores noticias de El Mante y el Tec Mante
              10/10
            </p>
            <div className="enlaces">
              <a href="#footer" className="negro">
                Conocenos!
              </a>
              <a href="#" className="verde" target="_blank">
                Apoyanos!
              </a>
            </div>
          </div>
          <Image src="./newswp.svg" alt="" width={350} height={350} />
        </div>
      </div>

      <p id="titulo">Musica</p>
      <hr></hr>
      <br></br>

      <div className="body-espectaculos">
        <div className="seccion-1">
          <TargetNew
            id={musica[0]._id}
            title={musica[0].tituloNoticia}
            date={musica[0].fechaPub}
            image={musica[0].image.secure_url}
            contentPrincipal={musica[0].parrafoPrincipal}
            autor={musica[0].autor}
          />
        </div>

        <div className="seccion-2">
          <TargetNew2
            id={musica[1]._id}
            title={musica[1].tituloNoticia}
            date={musica[1].fechaPub}
            image={musica[1].image.secure_url}
            autor={musica[1].autor}
          />
          <TargetNew2
            id={musica[2]._id}
            title={musica[2].tituloNoticia}
            date={musica[2].fechaPub}
            image={musica[2].image.secure_url}
            autor={musica[2].autor}
          />
        </div>

        <div className="seccion-3">
          <TargetNew3
            id={musica[3]._id}
            title={musica[3].tituloNoticia}
            date={musica[3].fechaPub}
            image={musica[3].image.secure_url}
            autor={musica[3].autor}
          />
          <TargetNew3
            id={musica[4]._id}
            title={musica[4].tituloNoticia}
            date={musica[4].fechaPub}
            image={musica[4].image.secure_url}
            autor={musica[4].autor}
          />
          <TargetNew3
            id={musica[5]._id}
            title={musica[5].tituloNoticia}
            date={musica[5].fechaPub}
            image={musica[5].image.secure_url}
            autor={musica[5].autor}
          />
        </div>
      </div>

      <div className="body">
        <div className="seccion-ult">
          <p id="titulo">Espectaculos</p>
          <hr></hr>
          <br></br>

          <div className="contenedor">
            {espectaculos.map((noticia) => (
              <LastNews
                id={noticia._id}
                key={noticia._id}
                title={noticia.tituloNoticia}
                date={noticia.fechaPub}
                image={noticia.image.secure_url}
                autor={noticia.autor}
                contentPrincipal={noticia.parrafoPrincipal}
              />
            ))}
          </div>
        </div>

        <div className="seccion-top">
          <p id="titulo">Deportes</p>
          <hr></hr>
          <br></br>
          {deportes.map((noticia, index) => (
            <SideNews
              key={noticia._id}
              id={noticia._id}
              title={noticia.tituloNoticia}
              date={noticia.fechaPub}
              contentPrincipal={noticia.parrafoPrincipal}
              number={index + 1}
            />
          ))}
        </div>
      </div>

      <FooterMain />
    </div>
  );
}

export default PeriodicoPage;
