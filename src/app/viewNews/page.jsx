import "./viewNews.css";
import HeaderInside from "@/components/header";
import MenuInside from "@/components/menuInside";
import TargetView from "@/components/TargetView";

async function fetchNews() {
  const res = await fetch("http://localhost:5000/noticias");
  const data = await res.json();
  return data;
}

async function InsidePage() {
  const news = await fetchNews();
  console.log(news);

  return (
    <>
      <HeaderInside />
      <main className="main-news">
        <MenuInside />
        <div className="news-view-frame">
          {news.map((item) => {
            return (
              <TargetView
                key={item.id}
                title={item.tituloNoticia}
                section={item.tipoNoticia}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default InsidePage;
