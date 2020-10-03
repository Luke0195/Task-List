import React, { Component } from 'react';
import './styles.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#">
          <input type="text" name="msg" placeholder="Informe a Tarefa" onChange={this.handleChangeInput} />
          <button type="submit"> Enviar</button>
        </form>
      </div>
    );
  }
}
