"use client";
import React from "react";
import "./styles.css";

function UploadPage() {
  return (
    <form action="" class="form-crear">
      <div class="group-titulo">
        <label for="titulo">Titulo de Noticia</label>
        <input type="text" required id="titulo" />
      </div>

      <div class="group-categoria">
        <label for="selectcategoria">Categoria</label>
        <select name="selectedFruit" id="selectcategoria">
          <option value="apple">Farandula</option>
          <option value="banana">Locales</option>
          <option value="orange">Orange</option>
        </select>
      </div>

      <div class="group-fecha">
        <label for="fecha">Fecha de publicación</label>
        <input
          type="date"
          required
          id="fecha"
          min="2018-01-01"
          max="2026-12-31"
        />
      </div>

      <div class="group-autor">
        <label for="autor">Autor</label>
        <input type="text" required id="autor" />
      </div>

      <div class="group-principal">
        <label for="principal">Parrafo Principal</label>
        <textarea type="text" required id="principal">
          {" "}
        </textarea>
      </div>

      <div class="group-secundario">
        <label for="secundario">Parrafo secundario</label>
        <textarea type="text" required id="secundario">
          {" "}
        </textarea>
      </div>

      <div class="bottom-group">
        <div class="group-img">
          <label for="images" class="drop-container">
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
  );
}

export default UploadPage;
