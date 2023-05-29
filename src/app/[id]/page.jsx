/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable react/no-unescaped-entities */
import { useParams } from "next/navigation";
import React from "react";
import "../principal/style.css";
import "./style.css";
import Image from "next/image";

import SideNews from "../principal/SideNews";
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";

async function getNews() {
  const res = await fetch("http://localhost:5000/noticias", {
    cache: "reload",
  });
  const json = await res.json();
  return json;
}

//GET ONLY NEW
async function getNew(id) {
  const res = await fetch(`http://localhost:5000/noticias/${id}`, {
    cache: "reload",
  });
  const json = await res.json();
  return json;
}

async function MainNew() {
  const { id } = useParams();
  const noticia = await getNew(id);

  const news = await getNews();
  const deportes = news.filter((noticia) => noticia.tipoNoticia === "Deportes");

  return (
    <div>
      <HeaderMain />

      <p id="titulo">Musica</p>
      <hr></hr>
      <br></br>

      <div className="body">
        <div className="noticia">
          <hr />
          <h3>{noticia.tipoNoticia}</h3>
          <hr />
          <h2>{noticia.tituloNoticia}</h2>

          <p>{noticia.parrafoPrincipal}</p>
          <img src={noticia.image.secure_url} />

          <hr />
          <div className="autor-date">
            <p>{noticia.autor}</p>
            <p>{noticia.fechaPub}</p>
          </div>
          <hr id="espacioautor" />
          <p>{noticia.contenidoNoticia}</p>
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

export default MainNew;
