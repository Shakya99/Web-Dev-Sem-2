import React, { useState } from 'react'

const InputBox = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  }
  const handleClick = () =>{
    alert(inputText);
  }
  return (
   <>
   <input type="text" 
    placeholder="type"
    value={inputText} 
    onChange={handleChange} />
   <button onClick={handleClick}>Submit</button>
   </>
  )
}

export default InputBox

