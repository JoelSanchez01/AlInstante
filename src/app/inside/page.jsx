"use client";

import HeaderInside from "@/components/header";
import MenuInside from "@/components/menuInside";
import "./inside.css";

function InsidePage() {
  return (
    <div className="insidePage">
      <HeaderInside />

      <MenuInside />
      <h2>Hola</h2>
    </div>
  );
}

export default InsidePage;
