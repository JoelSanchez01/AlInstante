import React from "react";
import "./SideNews.css";

function SideNews({ title, date, contentPrincipal, number }) {
  return (
    <div>
      <div className="side-news">
        <div className="lista">
          <div className="elemento">
            <div className="numero">
              <h3>{number}</h3>
            </div>
            <div className="contenido">
              <h4 className="titulo">
                <a target="_blank" href="#">
                  {title}
                </a>
              </h4>
              <p className="texto">{contentPrincipal}</p>
              <p className="fecha">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideNews;
