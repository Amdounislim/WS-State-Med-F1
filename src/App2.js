import React, { useState, useEffect } from 'react'
import './App.css'
import AddTodo2 from './components/AddTodo2'
import Counter from './components/Counter'

const App2 = () => {
    // 1- declaration count
    const [count, setCount] = useState(0)
    // 2- declaration list
    const [list, setList] = useState(["Hello", "Bonjour", "Schalum", "3aslema"])
    // 3- declaration show
    const [show, setShow] = useState(false)

    // 2- function add x in list
    const add = (x) => {
        setList([...list, x])
    }

    // 4 - LifeCycle : useEffect
    useEffect(() => {
        console.log("Effect")
    }, [count])

    return (
        <div className='App'>
            <h1>React Hooks</h1>
            {/* 1 - incrementation counter */}
            <button onClick={() => setCount(count + 1)}>+</button>
            {/* <h3>{count}</h3> */}
            <Counter count={count} />
            {/* 1 - decrementation counter */}
            <button onClick={() => setCount(count - 1)}>-</button>
            {/* 3 - Toggle show */}
            <button onClick={() => setShow(!show)}>Show</button>
            {show &&
            // 2- passing props from child to parent
             <AddTodo2 add={add} />}

        </div>
    )
}

export default App2
