import React from 'react'
import './Card.css'
import lettuce from '../../assets/imgs/lechuga.jpg'

export default function Card({nombre,precio, modo,soltarForm,agregarCarrito,id,eliminarProducto, img}) {
  return (
    <div className='card'>
        <img className='imagen' src={img} alt=''/>
        <div className='details'>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {modo ?
            <div className='acciones'>
              {/* Editar */}
            <i class="fa-solid fa-pen-to-square icon fa-2x" onClick={soltarForm} id={id}></i>
            <i class="fa-solid fa-trash icon fa-2x" onClick={eliminarProducto} id={id}></i>
            </div>
            : <button className='add' id={id} onClick={agregarCarrito}>Agregar al carrito</button> }
  
        </div>
    </div>
  )
}
 