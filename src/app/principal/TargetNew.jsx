import React from "react";
import "./TargetNew.css";

function TargetNew({ title, date, image, contentPrincipal, autor }) {
  return (
    <div className="tabla">
      <div className="fila">
        <div className="articles1">
          <article className="one">
            <img src={image} alt="" />
            <h2>
              <a target="_blank" href="#">
                {title}
              </a>
            </h2>
            <p className="text">{contentPrincipal}</p>
            <p className="autor">{autor}</p>
            <p className="fecha">{date}</p>
          </article>
        </div>
      </div>
    </div>
  );
}
export default TargetNew;
