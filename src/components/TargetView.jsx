import React from "react";
/* eslint-disable jsx-a11y/alt-text */
import "./NewsViewCard.css";
import Image from "next/image";

function TargetView() {
  return (
    <article className="news-view-card">
      <a href="">
        <div className="news-view-card-info">
          <span className="news-view-card-title">Titulo noticia - Sección</span>
        </div>
      </a>
      <aside>
        <Image
          className="news-view-card-edit"
          src="/edit_icon.png"
          width={30}
          height={30}
          alt="incono"
        />
        <Image
          className="news-view-card-delete"
          src="/delete_icon.png"
          width={30}
          height={30}
          alt="incono"
        />
      </aside>
    </article>
  );
}

export default TargetView;
