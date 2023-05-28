import React from "react";
import "./LastNews.css";

function LastNews({ title, date, image, contentPrincipal }) {
  return (
    <div>
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
    </div>
  );
}
export default LastNews;
