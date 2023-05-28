/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./TargetNew3.css";
import Link from "next/link";

function TargetNew3({ id, title, date, image, autor }) {
  return (
    <div className="article">
      <article className="target-new">
        <img className="image" src={image} />
        <div className="contenido">
          <h2>
            <Link href={`/${id}`}>{title}</Link>
          </h2>
          <p className="autor">{autor}</p>
          <p className="fecha">{date}</p>
        </div>
      </article>
    </div>
  );
}
export default TargetNew3;
