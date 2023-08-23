import React from "react";
import "../styles/navBar.css";


const NavBar = () => {
    return (
        <header>
         
        <nav>
        <div className="logo">
            <img src={dark} alt="logo.png" />
          </div>
          <ul>
            <li><a href="/">Logo</a></li>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Carrito</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
}

export default NavBar;