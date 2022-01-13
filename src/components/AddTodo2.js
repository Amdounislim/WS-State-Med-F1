import React,{useState} from 'react'

const AddTodo2 = (props) => {
    const [text, setText] = useState("")
    return (
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>props.add(text)}>ADD</button>
        </div>
    )
}

export default AddTodo2
