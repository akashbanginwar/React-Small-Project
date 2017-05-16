import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <table>
        <li className="Todo">
        <strong>{this.props.todo.title}</strong>
        </li>
      </table>

    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object
}

export default TodoItem;
