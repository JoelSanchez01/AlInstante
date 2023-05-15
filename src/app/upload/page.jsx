"use client";
import React from "react";
import "./styles.css";
import HeaderInside from "@/components/header";
import MenuInside from "@/components/menuInside";
function UploadPage() {
  return (
    <div className="uploadPage">
      <header>
        <HeaderInside />
      </header>

      <main>
        <MenuInside />
        <form action="" className="form-crear">
          <div className="group-titulo">
            <label htmlFor="titulo">Titulo de Noticia</label>
            <input type="text" required id="titulo" />
          </div>

          <div className="group-categoria">
            <label htmlFor="selectcategoria">Categoria</label>
            <select name="selectedFruit" id="selectcategoria">
              <option value="apple">Farandula</option>
              <option value="banana">Locales</option>
              <option value="orange">Orange</option>
            </select>
          </div>

          <div className="group-fecha">
            <label htmlFor="fecha">Fecha de publicación</label>
            <input
              type="date"
              required
              id="fecha"
              min="2018-01-01"
              max="2026-12-31"
            />
          </div>

          <div className="group-autor">
            <label htmlFor="autor">Autor</label>
            <input type="text" required id="autor" />
          </div>

          <div className="group-principal">
            <label htmlFor="principal">Parrafo Principal</label>
            <textarea type="text" required id="principal"></textarea>
          </div>

          <div className="group-secundario">
            <label htmlFor="secundario">Parrafo secundario</label>
            <textarea type="text" required id="secundario"></textarea>
          </div>

          <div className="bottom-group">
            <div className="group-img">
              <label htmlFor="images" className="drop-container">
                <input
                  type="file"
                  id="images"
                  accept="image/png, image/jpeg"
                  required
                />
              </label>
            </div>
            <button type="submit">Subir</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default UploadPage;
