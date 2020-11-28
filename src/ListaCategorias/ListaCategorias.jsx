import React, { Component } from 'react';
import './style.css';
import CardCategoria from '../CardCategoria/Card-categoria';

export default class ListaCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.novasCategorias.bind(this));
  }

  novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  componentWillUnmount() {
    this.props.categoria.desinscrever(this.novasCategorias.bind(this));
  }

  handleInput(event) {
    if (event.key === 'Enter') {
      let categoria = event.target.value;
      this.props.addCategoria(categoria)
    }
  }

  render() {
    return (
      <section className="categorias">

        <input
          type="text"
          placeholder="Adicione uma categoria"
          onKeyPress={this.handleInput.bind(this)}
        />

        <ul>
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index}>
                <CardCategoria
                index={index}
                categoria={categoria}
                deleteCategoria={this.props.deleteCategoria} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}