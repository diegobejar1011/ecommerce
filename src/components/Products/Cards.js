import React from 'react'
import Card from './Card'
import './Card.css'
export default function Cards({modo,soltarForm,productos,agregarCarrito,eliminarProducto}) {

  
  return (
    <div className='cards'>{productos.map((producto, index)=>{
      return (<Card key={index} 
        img = {producto.imagen}
        id={index}
        nombre={producto.nombre} 
        precio={producto.precio} 
        modo={modo} soltarForm={soltarForm} 
        agregarCarrito={agregarCarrito} 
        eliminarProducto={eliminarProducto}/>)
    })}</div>
  )
}
