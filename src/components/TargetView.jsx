"use client";
import React from "react";
import Link from "next/link";
import "./NewsViewCard.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

//delete api
const deleteNews = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:5000/noticias/${id}`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

function TargetView({ title, section, id }) {
  const router = useRouter();

  return (
    <article className="news-view-card">
      <div
        className="news-view-card-info"
        onClick={() => {
          router.push(`/viewNews/${id}`);
        }}
      >
        <span className="news-view-card-title">
          {title} - {section}
        </span>
      </div>

      <aside>
        <button
          onClick={() => {
            router.push(`/viewNews/${id}`);
          }}
        >
          <Image
            className="news-view-card-edit"
            src="/edit_icon.png"
            width={30}
            height={30}
            alt="incono"
          />
        </button>
        <button
          onClick={() => {
            if (window.confirm(`Seguro de eliminar la noticia ${title}?`)) {
              deleteNews(id);
              router.push("/viewNews/");
            }
          }}
        >
          <Image
            className="news-view-card-delete"
            src="/delete_icon.png"
            width={30}
            height={30}
            alt="incono"
          />
        </button>
      </aside>
    </article>
  );
}

export default TargetView;
