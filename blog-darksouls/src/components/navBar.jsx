import React from "react";
import "../styles/navBar.css";
import dark from "../images/dark.gif";


const NavBar = () => {
    return (
        <header>
          <nav>
            <div className="logo">
              <a href="/"> <img src={dark} alt="logo.png" /></a>
            </div>
            <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Posts</a></li>
            <li><a href="/contacto">Lore</a></li>
            <li><a href="/contacto">Personajes</a></li>
          </ul>
        </nav>
      </header>
    );
}

export default NavBar;