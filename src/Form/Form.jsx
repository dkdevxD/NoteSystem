import React, { Component } from 'react';
import './style.css';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.titulo = ''
    this.texto = ''
    this.categoria = 'Sem categoria'
    this.state = { categorias: [] };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.novasCategorias.bind(this));
  }

  novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this.novasCategorias.bind(this));
  }

  handleTitulo(event) {
    this.titulo = event.target.value;
  }

  handleTexto(event) {
    this.texto = event.target.value;
  }

  mudaCategoria(event) {
    this.categoria = event.target.value;
  }

  criaNota(event) {
    event.preventDefault()
    this.props.criaNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <aside className="formulario">
        <form onSubmit={this.criaNota.bind(this)}>

          <select onChange={this.mudaCategoria.bind(this)}>
            <option>Sem categoria</option>

            {this.state.categorias.map((categoria, index) => {
              return (
                <option key={index}>{categoria}</option>
              );
            })}
          </select>
          <input
            type="text"
            placeholder="Título"
            onChange={this.handleTitulo.bind(this)}
          />

          <textarea
            placeholder="Descricao da nota aqui"
            onChange={this.handleTexto.bind(this)}
          />

          <button>Criar Nota</button>
        </form>
      </aside>
    );
  }
}