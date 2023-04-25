import React from "react";
import './styles.css';



import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

export default function Home() {
  return (
  <div class ="box">
  <form>
      <h1>Al Instante</h1>
      <h2>Iniciar Sesión</h2>
      <div class = "inputBox">
          <input type = "text" required ="required"/> 
          <span>Usuario</span>
          <i></i>
      </div>
      <div class="inputBox">
          <input type = "password" required ="required"/> 
          <span>Contraseña</span>
          <i></i>
      </div>
  <div class="links">
      <a href="#">¿Olvidaste la contraseña?</a>
      <a href="#">Registrarse</a>
  </div>
  <input type = "submit" value="Login" />
  </form>
</div>) 
}
