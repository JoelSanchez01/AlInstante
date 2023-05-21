"use client";
import Link from "next/link";
import "./menuInside.css";
import { usePathname } from "next/navigation";

function MenuInside() {
  const pathname = usePathname();

  // console.log(pathname);

  return (
    <div className="menuInside">
      <ul>
        <li>
          <Link href="/viewNews">Noticias</Link>
        </li>
        <li>
          <Link href="/upload">Crear Noticias</Link>
        </li>
        <li>
          <Link href="/login">Salir</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuInside;
