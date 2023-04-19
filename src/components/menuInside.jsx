"use client";
import Link from "next/link";
import "./menuInside.css";
import { usePathname } from "next/navigation";

function MenuInside() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="menuInside">
      <ul>
        <li>
          <Link href="/inside">Noticias</Link>
        </li>
        <li>
          <Link href="/inside">Crear Noticias</Link>
        </li>
        <li>
          <Link href="/inside">Salir</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuInside;
