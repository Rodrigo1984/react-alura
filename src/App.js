import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Header from "./Header";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import './App.css'
class App extends Component {
  state = {
    autores: [
      {
        nome: "Paulo",
        livro: "React",
        preco: "1000",
      },
      {
        nome: "Daniel",
        livro: "Java",
        preco: "99",
      },
      {
        nome: "Marcos",
        livro: "Design",
        preco: "150",
      },
      {
        nome: "Bruno",
        livro: "DevOps",
        preco: "100",
      },
    ],
  };

  removeAutor = (index) => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });
  };

  escutadorDeSubmit = (autor) => {
    this.setState({ autores: [...this.state.autores, autor] });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container mb-10">
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
        </div>
    );
  }
}

export default App;
