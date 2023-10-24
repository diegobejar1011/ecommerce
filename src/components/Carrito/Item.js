import React from 'react'
import './Item.css'
export default function Item({nombre,eliminarCarrito,id,cantidad, img}) {
  return (
    <div className='item'>
      <img className='imagen_carrito' src={img} alt=''/>
      <p>{nombre}</p>
      <p>{cantidad}</p>
      <i class="fa-solid fa-xmark  fa-1x" id={id} onClick={eliminarCarrito}></i>
    </div>
  )
}
