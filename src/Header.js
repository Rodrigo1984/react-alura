import React from "react";

const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper green darken-2">
        <a href="/" class="brand-logo">
          Casa do Rodrigo
        </a>
        <ul class="right">
          <li>
            <a href="/Autores">Autores</a>
          </li>
          <li>
            <a href="/Livros">Livros</a>
          </li>
          <li>
            <a href="Sobre">Sobre</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
