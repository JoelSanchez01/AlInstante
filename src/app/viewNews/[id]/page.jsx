/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React from "react";
import "../../upload/styles.css";
import { useParams } from "next/navigation";
import HeaderInside from "@/components/header";
import MenuInside from "@/components/menuInside";
import { useState } from "react";
import dynamic from "next/dynamic";

async function fetchNew(id) {
  const res = await fetch(`http://localhost:5000/noticias/${id}`);
  const data = await res.json();
  return data;
}

async function UploadPage() {
  const [values, setValues] = useState({
    tituloNoticia: "",
    tipoNoticia: "",
    fechaPub: "",
    autor: "",
    parrafoPrincipal: "",
    contenidoNoticia: "",
    image: "",
  });

  const params = useParams();
  const user = await fetchNew(params.id);
  console.log(user);

  //update api
  const updateNew = async (id, values) => {
    const res = await fetch(`http://localhost:5000/noticias/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="uploadPage">
      <header>
        <HeaderInside />
      </header>

      <main>
        <MenuInside />
        <form action="" className="form-crear" onSubmit={handleForm}>
          <div className="group-titulo">
            <label htmlFor="titulo">Titulo de Noticia</label>
            <input
              name="tituloNoticia"
              type="text"
              required
              value={user.tituloNoticia}
              id="titulo"
              onChange={handleInputChange}
            />
          </div>

          <div className="group-categoria">
            <label htmlFor="selectcategoria">Categoria</label>
            <select
              value={user.tipoNoticia}
              name="tipoNoticia"
              onChange={handleInputChange}
              id="selectcategoria"
            >
              <option value="Locales">Locales</option>
              <option value="Deportes">Deportes</option>
              <option value="Musica">Musica</option>
              <option value="Espectaculos">Espectaculos</option>
            </select>
          </div>

          <div className="group-fecha">
            <label htmlFor="fecha">Fecha de publicación</label>
            <input
              value={user.fechaPub}
              name="fechaPub"
              type="date"
              id="fecha"
              required
              min="2018-01-01"
              max="2026-12-31"
              onChange={handleInputChange}
            />
          </div>

          <div className="group-autor">
            <label htmlFor="autor">Autor</label>
            <input
              value={user.autor}
              name="autor"
              required
              type="text"
              id="autor"
              onChange={handleInputChange}
            />
          </div>

          <div className="group-principal">
            <label htmlFor="principal">Parrafo Principal</label>
            <textarea
              value={user.parrafoPrincipal}
              name="parrafoPrincipal"
              required
              type="text"
              id="principal"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="group-secundario">
            <label htmlFor="secundario">Parrafo secundario</label>
            <textarea
              value={user.contenidoNoticia}
              name="contenidoNoticia"
              required
              type="text"
              id="secundario"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="bottom-group">
            <div className="group-img">
              <label htmlFor="images" className="drop-container">
                <input
                  name="image"
                  required
                  type="file"
                  id="images"
                  accept="image/png, image/jpeg"
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <button
              type="submit"
              onClick={() => {
                updateNew(params.id, values);
              }}
            >
              Subir
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default dynamic(() => Promise.resolve(UploadPage), { ssr: false });
