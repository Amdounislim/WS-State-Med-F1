import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        text: ""
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.setState({ text: e.target.value })} />
                <button onClick={() => this.props.add(this.state.text)}>ADD</button>
            </div>
        )
    }
}
