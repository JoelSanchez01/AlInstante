import React from "react";
import "./TargetNew3.css";

function TargetNew3({ title, date, image, autor }) {
  return (
    <div className="article">
      <article class="target-new">
        <img className="image" src={image} />
        <div className="contenido">
          <h2>
            <a target="_blank" href="#">
              {title}
            </a>
          </h2>
          <p class="autor">{autor}</p>
          <p class="fecha">{date}</p>
        </div>
      </article>
    </div>
  );
}
export default TargetNew3;
