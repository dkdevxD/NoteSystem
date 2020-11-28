import React, { Component } from "react";
import Form from './Form/Form';
import ListaNotas from './ListaNotas/Lista-notas';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import './index.css';
import ArrayDeNotas from './Data/Notas';
import Categorias from "./Data/Categorias";

export default class App extends Component {
  constructor() {
    super();
    this.notas = new ArrayDeNotas();
    this.categorias = new Categorias();
  }

  render() {
    return (
      <section>
        <Form
          criaNota={this.notas.adicionaNota.bind(this.notas)}
          categorias={this.categorias}
        />
        <main>

          <ListaCategorias
            categorias={this.categorias}
            addCategoria={this.categorias.adicionaCategoria.bind(this.categorias)}
            deleteCategoria={this.categorias.deletaCategoria.bind(this.categorias)}
          />

          <ListaNotas
            notas={this.notas}
            deleteNota={this.notas.deletaNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}