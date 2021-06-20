import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/todo';


export default class App extends React.Component {

  state = {
    title: '',
    deadline: '',
    toDoList: []
  }
  handleToDoChange(event) { this.setState({ title: event.target.value }); }
  handleDateChange(event) { this.setState({ deadline: event.target.value }); }


  componentDidMount() {
    let toDoList = JSON.parse(localStorage.getItem('todoList'));

    if (localStorage.getItem('todoList')) {
      this.setState({
        toDoList: toDoList
      })
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    let newItem = { id: Date.now(), title: this.state.title, deadline: this.state.deadline, isDone: 0 };
    let toDoList = this.state.toDoList;
    toDoList.push(newItem);
    this.setState({toDoList: toDoList});
    localStorage.setItem('todoList', JSON.stringify(toDoList));
  }

  renderTodoList(){
    let toDoList = this.state.toDoList;
    if(toDoList.length){
      this.state.toDoList.map((item) => <Todo item={item} toDoList={this.state.toDoList}/>);
    }
  }

  render() {
    return (
      <div className="container-md">
        <h3 className="title text-center">Reminder Pro</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="row justify-content-around g-lg-0">
            <div className="col-6 col-md-auto">
              <input onChange={(event) => this.handleToDoChange(event)} name="title" className="todo form-control" type="text"
                placeholder="I have to..." required />
            </div>
            <div className="col-6 col-md-auto">
              <input onChange={(event) => this.handleDateChange(event)} name="deadline" className="form-control" id="datepicker" type="text"
                placeholder="Date" required />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary submit w-100">Add Reminder</button>
            </div>
          </div>
        </form>
        <ul className="todo-list">
          {this.state.toDoList.map((item, index) => <Todo key={index} item={item} toDoList={this.state.toDoList}/>)}
        </ul>
      </div>
    );
  }
}

