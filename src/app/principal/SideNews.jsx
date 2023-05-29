import React from "react";
import "./SideNews.css";
import Link from "next/link";

function SideNews({ id, title, date, contentPrincipal, number }) {
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
                <Link href={`/${id}`}>{title}</Link>;
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
