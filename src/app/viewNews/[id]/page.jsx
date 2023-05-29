"use client";
import "../../upload/styles.css";
import HeaderInside from "@/components/header";
import MenuInside from "@/components/menuInside";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

function EditPage() {
  const params = useParams();

  const router = useRouter();

  useEffect(() => {
    axios.get(`http://localhost:5000/noticias/${params.id}`).then((res) => {
      setValues({
        tituloNoticia: res.data.tituloNoticia,
        tipoNoticia: res.data.tipoNoticia,
        fechaPub: res.data.fechaPub,
        autor: res.data.autor,
        parrafoPrincipal: res.data.parrafoPrincipal,
        contenidoNoticia: res.data.contenidoNoticia,
        image: res.data.image,
      });
    });
  }, [params.id]);

  const [values, setValues] = useState({
    tituloNoticia: "",
    tipoNoticia: "",
    fechaPub: "",
    autor: "",
    parrafoPrincipal: "",
    contenidoNoticia: "",
    image: "",
  });

  const updateNew = async (id, values) => {
    axios
      .put(`http://localhost:5000/noticias/${id}`, values, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(`Success` + res.data);
        router.push("/viewNews");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputFile = (e) => {
    const file = e.target.files[0];

    setValues({
      ...values,
      image: file,
    });
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
              id="titulo"
              defaultValue={values.tituloNoticia}
              onChange={handleInputChange}
            />
          </div>

          <div className="group-categoria">
            <label htmlFor="selectcategoria">Categoria</label>
            <select
              name="tipoNoticia"
              onChange={handleInputChange}
              id="selectcategoria"
              required
              defaultValue={values.tipoNoticia}
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
              name="fechaPub"
              type="date"
              id="fecha"
              required
              min="2018-01-01"
              max="2026-12-31"
              onChange={handleInputChange}
              defaultValue={values.fechaPub}
            />
          </div>

          <div className="group-autor">
            <label htmlFor="autor">Autor</label>
            <input
              name="autor"
              required
              type="text"
              id="autor"
              onChange={handleInputChange}
              defaultValue={values.autor}
            />
          </div>

          <div className="group-principal">
            <label htmlFor="principal">Parrafo Principal</label>
            <textarea
              name="parrafoPrincipal"
              required
              type="text"
              id="principal"
              onChange={handleInputChange}
              defaultValue={values.parrafoPrincipal}
            ></textarea>
          </div>

          <div className="group-secundario">
            <label htmlFor="secundario">Parrafo secundario</label>
            <textarea
              name="contenidoNoticia"
              required
              type="text"
              id="secundario"
              onChange={handleInputChange}
              defaultValue={values.contenidoNoticia}
            ></textarea>
          </div>

          <div className="bottom-group">
            <div className="group-img">
              <label htmlFor="image" className="drop-container">
                <input
                  name="image"
                  required
                  type="file"
                  id="image"
                  accept="image/png, image/jpeg"
                  onChange={handleInputFile}
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

export default dynamic(() => Promise.resolve(EditPage), { ssr: false });
