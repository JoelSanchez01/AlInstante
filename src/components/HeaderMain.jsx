import Image from "next/image";
import "./HeaderMain.css";

function HeaderMain() {
  return (
    <>
      <header>
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <a href="#" className="nombre">
          Al Instante
        </a>
        <div className="grupo">
          <ul className="navegation">
            <li>
              <a href="#">Noticias</a>
            </li>
            <li>
              <a href="#">Sociales</a>
            </li>
            <li>
              <a href="#">Espectaculos</a>
            </li>
            <li>
              <a href="#">Musica</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default HeaderMain;
