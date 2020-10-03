import React, { Component } from 'react';
import './styles.css';
import { FaPlus } from 'react-icons/fa';

// Task
import { FaEdit, FaTrash } from 'react-icons/fa';

export default class Main extends Component {
  state ={
    novaTarefa: '',
    tarefas: [],
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novatarefas = [...tarefas];

    this.setState({
      tarefas: [...novatarefas, novaTarefa],
    });
  }

  handleChangeInput = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1> Lista de Tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            type="text"
            name="msg"
            placeholder="Informe a Tarefa"
            onChange={this.handleChangeInput}
            value={novaTarefa}
          />

          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="lista-item">
          {tarefas.map((tarefa) => (
            <li>
              {' '}
              {tarefa}
              <div className="buttons">
                <FaEdit className="edit" />
                <FaTrash className="delete" />
              </div>
            </li>
          ))}

        </ul>
      </div>

    );
  }
}
