import React from "react";
import "./Form.css";

export default function Form({cerrarForm,guardarDatos,agregarProducto}) {
  return (
    <div className="fondo_form">
      <div className="form">
      <i class="fa-solid fa-xmark equis" onClick={cerrarForm}></i>
        <div className="quizz">
          <label>Imagen del producto:</label>
          <input className="entrada file" type="file" name="imagen" onChange={guardarDatos} autoComplete="off"/>
        </div>
        <div className="quizz">
          <label>Nombre del producto:</label>
          <input className="entrada" name="nombre" onChange={guardarDatos} />
        </div>
        <div className="quizz">
          <label>Precio del producto:</label>
          <input className="entrada numero" name="precio" onChange={guardarDatos} type="number"/>
        </div>
        <button className="new" onClick={agregarProducto} >Agregar al cátalogo</button>
      </div>
    </div>
  );
}
