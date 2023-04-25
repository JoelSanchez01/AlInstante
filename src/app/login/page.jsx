import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div class="box">
      <form>
        <h1>Al Instante</h1>
        <h2>Iniciar Sesión</h2>
        <div class="inputBox">
          <input type="text" required="required" />
          <span>Usuario</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input type="password" required="required" />
          <span>Contraseña</span>
          <i></i>
        </div>
        <div class="links">
          <a href="#">¿Olvidaste la contraseña?</a>
          <a href="#">Registrarse</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
