import React, { Component } from 'react';
import { ReactComponent as DeleteSVG } from '../assets/icons/delete.svg';

export default class CardCategoria extends Component {

  deleteCategoria() {
    const index = this.props.index
    this.props.deleteCategoria(index);
  }

  render() {
    return (
      <div className="card-categoria">
        <h3>{this.props.categoria}</h3>
        {<DeleteSVG onClick={this.deleteCategoria.bind(this)} />}
      </div>
    );
  }
}