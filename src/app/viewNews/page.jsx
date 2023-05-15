import React from "react";
import "./viewNews.css";
import HeaderInside from "@/components/header";
import MenuInside from "@/components/menuInside";
import TargetView from "@/components/TargetView";

function InsidePage() {
  return (
    <>
      <HeaderInside />

      <main className="main-news">
        <MenuInside />
        <div className="news-view-frame">
          <TargetView />
          <TargetView />
          <TargetView />
          <TargetView />
        </div>
      </main>
    </>
  );
}

export default InsidePage;
