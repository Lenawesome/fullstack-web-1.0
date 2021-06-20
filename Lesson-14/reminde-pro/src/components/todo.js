import React from 'react';

export default class Todo extends React.Component {
    setStatus() {
        this.props.toDoList.forEach(element => {
            if (element.id === this.id) {
                element.isDone = element.isDone ? 0 : 1;
            }
        });
        localStorage.setItem('todoList', JSON.stringify(this.props.toDoList));
    }
    deleteById(event){
        let id = this.props.item.id;
        let toDoList = this.props.toDoList.filter(function (obj) {
            return obj.id !== id;
        });
        localStorage.setItem('todoList', JSON.stringify(toDoList));
        event.target.parentElement.remove();
    }
    render() {
        return <li className="todo-item">
            <div className="todo-item-title">{this.props.item.title}</div>
            <i>{this.props.item.deadline}</i>
            <input className="checked-flag form-check-input" type="checkbox" onChange={() => this.setStatus()} />
            <button onClick={(event) => this.deleteById(event)} type="button" className="btn-close delete-btn" aria-label="Close"></button>
        </li>
    }
}