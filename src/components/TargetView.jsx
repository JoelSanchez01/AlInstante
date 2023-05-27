"use client";
import React from "react";
import Link from "next/link";
import "./NewsViewCard.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function TargetView({ title, section, id }) {
  const router = useRouter();

  return (
    <article
      className="news-view-card"
      onClick={() => {
        router.push(`/viewNews/${id}`);
      }}
    >
      <div className="news-view-card-info">
        <span className="news-view-card-title">
          {title} - {section}
        </span>
      </div>

      <aside>
        <button>
          <Image
            className="news-view-card-edit"
            src="/edit_icon.png"
            width={30}
            height={30}
            alt="incono"
          />
        </button>
        <button>
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
