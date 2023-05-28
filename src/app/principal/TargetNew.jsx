/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./TargetNew.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

function TargetNew({ id, title, date, image, contentPrincipal, autor }) {
  return (
    <div className="tabla">
      <div className="fila">
        <div className="articles1">
          <article className="one">
            <img src={image} alt="" />
            <h2>
              <Link href={`/${id}`}>{title}</Link>
            </h2>

            <p className="autor">{autor}</p>
            <p className="fecha">{date}</p>
          </article>
        </div>
      </div>
    </div>
  );
}
export default TargetNew;
