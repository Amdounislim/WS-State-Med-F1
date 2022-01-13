import React, { Component } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Counter from './components/Counter'

export default class App extends Component {
  state = {
    // 1- declaration count
    count: 0,
    // 2- declaration list
    list: ["Hello", "Bonjour", "Schalum", "3aslema"],
    // 3- declaration show
    show: true
  }

  // 2- function add x in list
  add = (x) => {
    this.setState({
      list: [...this.state.list, x]
    })
  }

 //1 - incrementation counter
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  //1 - decrementation counter
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }


  // 4 - LifeCycle : componentDidMount
  componentDidMount() {
    console.log("Mount")
  }
  // 4 - LifeCycle : componentDidUpdate
  componentDidUpdate() {
    console.log("Update")
  }


  render() {
    return (
      <div className='App'>
        {/* 1 - Counter */}
        {/* 1 - incrementation counter */}
        <button onClick={this.increment} >+</button>
        {/* <h3>{this.state.count}</h3> */}
        <Counter count={this.state.count} />
        {/* 1 - decrementation counter */}
        <button onClick={this.decrement} >-</button>


        {/* 3 - Toggle show */}
        <button onClick={() => this.setState({ show: !this.state.show })}>show</button>
        {this.state.show ? 
        // 2- passing props from child to parent
        <AddTodo add={this.add} /> : 
        null}
      </div>
    )
  }
}
