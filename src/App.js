import React, { Component } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Counter from './components/Counter'

export default class App extends Component {
  state = {
    count: 0,
    list: ["Hello", "Bonjour", "Schalum", "3aslema"],
    show: true
  }

  add = (x) => {
    this.setState({
      list: [...this.state.list, x]
    })
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  componentDidMount() {
    console.log("Mount")
  }

  componentDidUpdate() {
    console.log("Update")
  }


  render() {
    return (
      <div className='App'>
        {/* <button onClick={this.increment} >+</button> */}
        {/* <h3>{this.state.count}</h3> */}
        {/* <Counter count={this.state.count} />
        <button onClick={this.decrement} >-</button> */}



        <button onClick={() => this.setState({ show: !this.state.show })}>show</button>
        {this.state.show ? <AddTodo add={this.add} /> : null}
      </div>
    )
  }
}
