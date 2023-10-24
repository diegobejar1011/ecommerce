import React from 'react'
import './Form.css'

export default function AddButton({soltarForm}) {
  return (
    <div className='agregar'>
        <i class="fa-solid fa-plus fa-6x" onClick={soltarForm}></i>
    </div>
  )
}
