import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"

const Todo = props => (
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/"+props.todo._id}>Edit</Link>
    </td>
  </tr>
)

export default class TodosList extends Component {
  constructor(props) {
    super(props)

    this.setState = { todos: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/todos/')
          .then(res => {
            this.setState({ todos: Response.data })
          })
          .catch((error) => console.log(error))
  }

  todoList() {
    return this.state.todos.map((currentTodo, i) => 
    <Todo todo={currentTodo} key={i} />)
  }

  render() {
    return(
      <div>
        <h3>Todos TodosList</h3>
        <table className="table table-stripped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.TodosList() }
          </tbody>
        </table>
      </div>
    )
  }
}