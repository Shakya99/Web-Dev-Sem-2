import React,{useState} from "react";

const StatementAndEvents = () => {
    const[text,setText] = useState("");
    const handleTextChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
        <div>
            Enter text here
            </div>
            <textarea value={text} onChange={.handleChange}></textarea>
            <p>You typed: {text}</p>
        </>
    )
}

export default StatementAndEvents;