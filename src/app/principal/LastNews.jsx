/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./LastNews.css";
import Link from "next/link";

function LastNews({ id, title, date, image, contentPrincipal }) {
  return (
    <div className="tarjeta">
      <img src={image} />
      <h3>
        <Link href={`/${id}`}>{title}</Link>;
      </h3>
      <p>
        {contentPrincipal}
        <br />
      </p>
      <p>
        <br />
        <b>{date}</b>
      </p>
    </div>
  );
}
export default LastNews;
