import './Carrito.css'
import React from "react";

const Carrito = () => {
  let carrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return(
    <>
    <img className='Carrito' src={carrito} alt="carrito"/>
    <strong>10</strong>
    </>
  )
}
export default Carrito
