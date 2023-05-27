"use client";
import "./viewNews.css";
import HeaderInside from "@/components/header";
import MenuInside from "@/components/menuInside";
import TargetView from "@/components/TargetView";
import dynamic from "next/dynamic";

async function fetchNews() {
  const res = await fetch("http://localhost:5000/noticias");
  const data = await res.json();
  return data;
}

async function InsidePage() {
  const news = await fetchNews();

  return (
    <>
      <HeaderInside />
      <main className="main-news">
        <MenuInside />
        <div className="news-view-frame">
          {news.map((item) => {
            return (
              <TargetView
                key={item._id}
                title={item.tituloNoticia}
                section={item.tipoNoticia}
                id={item._id}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
export default dynamic(() => Promise.resolve(InsidePage), { ssr: false });
