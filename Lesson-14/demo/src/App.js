import React from 'react';
import './App.css';
import Item from './components/item';

export default class App extends React.Component {

  state = {
    count: '2',
    lists: [1,2,3,4,5,6]
  }

  increase() {
    this.setState({
      count: this.state.count + 1
    });
  }

  changeInput(event){
    this.setState({
      count: event.target.value
    })
  }

  render() {
    return <div className="container">
      <h1> Input value is {this.state.count}</h1>
      <input value={this.state.count} onChange={(event) => this.changeInput(event)}></input>
      {
        this.state.count === '2' ? <Item index={this.state.count}/> : null
      }
    </div>
  }
}