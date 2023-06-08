
import Carrito from '../Carrito/Carrito';
import './NavBar.css';
import React from "react";

const NavBar = () => {
  return(
    <header>

      <h1>Tienda</h1>

      <nav>
        <li>

          <ul>libros</ul>
          <ul>articulos</ul>
          <ul>revistas</ul>
          <Carrito/>
        </li>
        
      </nav>
      </header>
  )
}
export default NavBar
