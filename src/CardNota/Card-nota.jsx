import React, { Component } from 'react';
import './style.css';
import { ReactComponent as DeleteSVG } from '../assets/icons/delete.svg';

export default class CardNota extends Component {

  deleteNota() {
    const index = this.props.index;
    this.props.deleteNota(index);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h2>{this.props.categoria}</h2>
          <DeleteSVG onClick={this.deleteNota.bind(this)} />
        </div>
        <div className="card-titulo">
          <h1>{this.props.titulo}</h1>
        </div>
        <div className="card-body">
          <p>{this.props.texto}</p>
        </div>
      </div>
    );
  }
}