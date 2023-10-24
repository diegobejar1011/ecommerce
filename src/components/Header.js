import React from "react";
import "./Header.css";
export default function Header({mostrar,cambiarModo,modo,cantidadCarrito}) {
  return (
    <header className="content">
      <h1 className="title">Shop</h1>
      <div className="botones">
        <div className="modo">
        <h2 onClick={cambiarModo}>{modo ? "Admin" : "Usuario"}</h2>
        <i class="fa-solid fa-rotate-right"></i>
        </div>
        {!(modo) && 
        <div>
        <button className="bottom" onClick={mostrar}>Carro</button>
        <p className="noti">{cantidadCarrito}</p>
        </div>}
      </div>
    </header>
  );
}
