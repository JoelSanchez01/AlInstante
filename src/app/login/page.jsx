"use client";
import React from "react";
import "./styles.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

//fetch api
async function getUser() {
  try {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function entrar(userInput, router) {
  const user = await getUser();
  user.map((item) => {
    if (
      userInput.username == item.username &&
      userInput.password == item.password
    ) {
      router.push("/viewNews");
    } else console.log("no");
  });
}

export default function Home() {
  const router = useRouter();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="box">
      <form onSubmit={handleForm}>
        <h1>Al Instante</h1>
        <h2>Iniciar Sesión</h2>
        <div className="inputBox">
          <input
            type="text"
            required
            name="username"
            onChange={handleInputChange}
          />
          <span>Usuario</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            type="password"
            name="password"
            required
            onChange={handleInputChange}
          />
          <span>Contraseña</span>
          <i></i>
        </div>

        <button
          onClick={() => {
            entrar(values, router);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
