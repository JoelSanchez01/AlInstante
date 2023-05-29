import Image from "next/image";
import "./FooterMain.css";

function FooterMain() {
  return (
    <footer>
      <section className="footer">
        <div className="social">
          <a href="#">
            <Image src="./facebook.svg" width={20} height={20} alt="" />
          </a>
          <a href="#">
            <Image src="./instagram.svg" width={20} height={20} alt="" />
          </a>
          <a href="#">
            <Image src="./twitter.svg" width={20} height={20} alt="" />
          </a>
          <a href="#">
            <Image src="./tiktok.svg" width={20} height={20} alt="" />
          </a>
        </div>
        <ul className="lista">
          <li>
            <a href="">Principal</a>
          </li>
          <li>
            <a href="">Noticias</a>
          </li>
          <li>
            <a href="">Espectaculos</a>
          </li>
          <li>
            <a href="">Música</a>
          </li>
        </ul>
        <p className="copyright">Al Instante @2023</p>
      </section>
    </footer>
  );
}

export default FooterMain;
