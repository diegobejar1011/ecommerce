import React from "react";
import Item from "./Item";
import "./Item.css";

export default function Items({carrito,eliminarCarrito}) {
  return (
    <div className="pantalla">
      <div className="list">
        {carrito.map((producto, index) => {
          return <Item key={index} id={index} cantidad={producto.cantidad} nombre={producto.nombre} eliminarCarrito={eliminarCarrito} img={producto.imagen}/>;
        })}
      </div>
    </div>
  );
}
