import React, { Component } from 'react';
import CardNota from '../CardNota/Card-nota'
import './style.css';

export default class ListaNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
  }

  componentDidMount() {
    this.props.notas.inscrever(this.novasNotas.bind(this));
  }

  novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this.novasNotas.bind(this));
  }

  render() {
    return (
      <main>
        <ul className="lista-notas">
          {this.state.notas.map((nota, index) => {
            return (
              <li key={index}>
                <CardNota
                  index={index}
                  titulo={nota.titulo}
                  texto={nota.texto}
                  categoria={nota.categoria}
                  deleteNota={this.props.deleteNota} />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
