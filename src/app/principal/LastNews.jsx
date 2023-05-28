/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./LastNews.css";

function LastNews({ title, date, image, contentPrincipal }) {
  return (
    <div className="tarjeta">
      <img src={image} />
      <h3>
        <a target="_blank" href="#">
          {title}
        </a>
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
