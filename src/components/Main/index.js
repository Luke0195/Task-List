import React, { Component } from 'react';
import './styles.css';
import { FaPlus } from 'react-icons/fa';

// Task
import { FaEdit, FaTrash } from 'react-icons/fa';

export default class Main extends Component {
  state ={
    novaTarefa: '',
    tarefas: [
      'Fazer café',
      'Tomar água',
      'Estudar ',
      'Estudar Mais',
      'Jogar Amoung Us',

    ],
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
        <form action="#" className="form">
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
