import Image from "next/image";
import "./header.css";

function HeaderInside() {
  return (
    <header>
      <hr />
      <div className="contentHeader">
        <Image src="/logo.png" width={75} height={75} alt="logo" />
        <h1>Al Instante</h1>
      </div>
      <hr />
    </header>
  );
}

export default HeaderInside;
